const Base = require("../../base/Command.js");

module.exports = class Pick extends Base {
    constructor(client) {
        super(client, {
            name: "pick",
            description: "Picks between multiple specified options. Separate your options with |s.",
            usage: "<item1|item2...>",
            category: "fun",
            permLevel: 0 
        });
    }

    run(message, args) {
        const choices = args.join(" ").split("|");
        // Error if nothing was provided to pick from
        if (choices.length <= 1) return super.error("That's not enough to pick from!");

        // Pick an argument
        const pick = Math.floor(Math.random() * choices.length);

        // Send a message containing the pick
        message.channel.send(`${message.author}\n${choices.map((arg, index) => index === pick ? `\`${arg}\`` : arg).join(", ")}`);
    }
};
