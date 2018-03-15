const Base = require("../../base/Command.js");

module.exports = class Hack extends Base {
    constructor(client) {
        super(client, {
            name: "hack",
            description: "Hacks into DiamondFire.",
            usage: "",
            category: "fun",
            permLevel: 0 
        });
    }

    async run(message, args) {
        // Ignore if sent in dfchat
        if (message.channel.name === "dfchat") return super.error("You can't use that here!");
        
        const log = await message.channel.send("Interfacing with mcdiamondfire.com...");
        await this.pause();
        await log.edit("Connection created. Cracking admin account passwords...");
        await this.pause();
        await log.edit("Success! mcdiamondfire.com has been hacked into. All players have been banned and all plots cleared!");
    }

    pause() {
        return new Promise(r => setTimeout(r, 5000));
    }
};
