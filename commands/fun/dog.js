const { get } = require("snekfetch");
const Base = require("../../base/Command.js");

module.exports = class Dog extends Base {
    constructor(client) {
        super(client, {
            name: "dog",
            description: "Shows a random dog.",
            usage: "",
            category: "fun",
            permLevel: 0,
            cooldown: 60000
        });
    }

    async run(message) {
        // Ignore if sent in dfchat
        if (message.channel.name === "dfchat") return super.error("You can't use that here!");

        // Send a cat
        const embed = new Discord.RichEmbed()
        .setImage(this.cache.shift())
        .setColor(0x00AE86)
            message.channel.send("[**Cat**]");
            message.channel.send({embed});
        // Add a new cat to cache
        this.fillCache(1);
    }

    async fillCache(amount = 5) {
        for (let i = 0; i < amount; i++) {
            const { text } = await get("https://verifybot.tomoli.cf/dog.php");
            this.cache.push(`${text}`);
        }
    }

    init() {
        Object.defineProperty(this, "cache", { value: [] });
        this.fillCache();
    }
};
