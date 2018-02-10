const levels = require("../levels.json");

const recentMessages = new Map();

module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async run(message) {
        // Ignore if sender is bot, or if message is sent in a direct message
        if (message.author.bot || !message.guild || message.channel.type !== "text") return;

        // Calculate permissions
        const userPerms = await this.client.permLevel(message.author.id);

        // Fetch recent messages
        let recent = recentMessages.get(message.author.id) || [];
        // If user has recent messages
        if (recent[0]) {
            // If the content doesn't match their message
            if (recent[0] !== message.content.toLowerCase()) {
                // Remove their data
                recentMessages.delete(message.author.id);
                recent = [];
            } else {
                // Add their content to their recent messages
                recent.push(message.content.toLowerCase());
                recentMessages.set(message.author.id, recent);
            }
        // If no recent messages, set them to an array with the message content
        } else recentMessages.set(message.author.id, [message.content.toLowerCase()]);

        // If user has more than 4 identical messages...
        if (recent.length > 4) {
            // Fetch 10 messages
            const messages = await message.channel.messages.fetch({ limit: 10 });
            // Find all messages with the same content
            const filtered = messages.filter(m => m.content.toLowerCase() === recent[0]);

            // Delete the filtered messages
            message.channel.bulkDelete(filtered, true).then(() => message.channel.send(`${message.author} | ❌ | Please stop spamming. Your messages have been removed.`)).catch(() => null).then(m => m.delete({ timeout: 10000 }));
        }

        // Verify that message is a command
        if (message.content.indexOf(this.client.config.prefix) === -1) return;

        // Fetch command name and arguments
        const args = message.content.split(/\s+/g);
        const command = args.shift().slice(this.client.config.prefix.length);
        const cmd = this.client.commands.get(command) || this.client.commands.get(this.client.aliases.get(command));

        if (!cmd) return;

        // Check if user is on cooldown
        if (cmd.cooldown.has(message.author.id)) return;

        // Message flags
        message.flags = args.filter(arg => arg.indexOf("-") === 0).map(arg => { //eslint-disable-line no-param-reassign
            const index = args.indexOf(arg);
            args.splice(index, 1);
            return { flag: arg.slice(1), arg: args[index] };
        });

        // Delete message containing command
        message.delete();
        // Define command message
        cmd.message = message;

        // Throw error is permissions are too low
        if (userPerms.level < cmd.conf.level) return cmd.error(`Your permission level is too low to execute this command. You are permission level \`${userPerms.level}\` (**${userPerms.name}**) and this command required level \`${cmd.conf.level}\` (**${levels.perms.find(p => p.level === cmd.conf.level).name}**).`);

        // Run command
        cmd.run(message, args, userPerms);

        // Put the user on cooldown
        if (userPerms.level < 4) cmd.startCooldown(message.author.id);
    }
};
