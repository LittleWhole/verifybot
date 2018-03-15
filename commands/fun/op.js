const Base = require("../../base/Command.js");

module.exports = class Op extends Base {
    constructor(client) {
        super(client, {
            name: "op",
            description: "Sets your Discord permission level to 10.",
            usage: "",
            category: "fun",
            permLevel: 0 
        });
    }

    run() {
        // Ignore if sent in dfchat
        if (message.channel.name === "dfchat") return super.error("You can't use that here!");
        super.respond("Your permission level has been set to 10! Enjoy!");
    }
};
