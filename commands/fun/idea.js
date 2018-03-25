const Base = require("../../base/Command.js");

module.exports = class Meow extends Base {
    constructor(client) {
        super(client, {
            name: "idea",
            description: "Generates a plot idea.",
            usage: "",
            category: "fun",
            permLevel: 0,
            cooldown: 60000
        });

        Object.defineProperty(this, "gameType", {
            value: [
                "An escapists game",
                "A PvP game",
                "An RPG game",
                "A parkour game",
                "A puzzle game",
                "A clicker game",
                "A tycoon game",
                "A survival game",
                "A horror game",
                "A magic game",
                "A KitPvP game",
                "A trivia game",
                "A exploration game",
                "An adventure game",
                "A real time strategy game",
                "A grindy escapist",
                "A grindy survival",
                "A stratgy game",
                "A board game",
                "A mob arena game",
                "A dropper game",
                "A spleef game",
                "A Mystery game",
                "A Murder game",
                "A Bedwars game",
                "A Skywars game",
                "A Skyblock game",
                "A Plot",
                "A musical game",
                "A art game",
                "A Arena game"
                
            ]
        });
        
        Object.defineProperty(this, "gameObjective", {
            value: [
                "where you parkour",
                "in which you try to fly",
                "in which you try to run",
                "in which you try to be free",
                "in which you search real love",
                "in which you want to get rich",
                "in which try to survive",
                "in which you battle players",
                "in which you kill mobs",
                "in which you farm DFC",
                "in which you farm CP",
                "in which you build a farm",
                "in which a meteor crashes into the earth",
                "in which a apocalypse breaks out",
                "in which you hunt a criminal",
                "in which you are making memes",
                "in which you spam !idea, hoping for something good",
                "in which you spam !idea, but there is nothing good",
                "in which you break the 4th wall",
                "in which you create music",
                "in which you hear music",
                "where you parkour",
                "where you parkour",
                "where you escape",
                "where you run",
                "where you collect items",
                "where you shoot lasers",
                "where you mirror movement",
                "where you rebuild structures",
                "where you farm points",
                "where you kill players",
                "where you battle mobs",
                "where you grind gold",
                "where you create a farm",
                "where you build a fort",
                "where you destroy a fort",
                "where you report a player",
                "where you break plot rules",
                "where you die",
                "where you jump",
                "where you fly",
                "where you build",
                "where you swim",
                "where you cant sprint",
                "where you play minigames",
                "where you battle Jeremaster",
                "where you battle a mob",
                "where you write fanfictions",
                "where you break everything",
                "where you get demonetized",
                "where you kill animals",
                "where you kill mobs",
                "where you code",
                "where you drown",
                "where you eat cake",
                "where you trigger lagslayer",
                "where you avoid CPU ussage",
                "where you break the loop",
            ]
        });
        
        Object.defineProperty(this, "gameReward", {
            value: [
                "until you die.",
                "until time runs out.",
                "to get points.",
                "to get escapes.",
                "to win.",
                "to end the game.",
                "to fail.",
                "to kill everything.",
                "and have to beat all levels",
                "with friends.",
                "or you die.",
                "or Dubanzi bans you.",
                "or you get kicked.",
                "or you wont get invited to the party.",
                "or you wont get your breakfast.",
                "with NPC Friends",
                "with fake friends.",
                "with ottelino <3",
                "with Jeremaster.",
                "with SnorkelStudios.",
                "or you get banned.",
                "or a tornado takes you to the land of OZ.",
                "with noone else.",
                "and get killed.",
                "and disappear.",
                "and stuff.",
                "to get banned.",
                "to make LagSlayer kill the plot.",
                "to be hated.",
                "to lose points.",
                "to be a meme.",
                "to be cool.",
                "to be a cool kid.",
                "to be a cool cat.",
                "to be a cool cat fan.",
                "so cool cat can save the kids.",
                "so ottelino can tell you he loves making !idea stuff",
                "to get jrhelper.",
                "to achieve absolutely nothing.",
                "to dance",
                "to win a golden mario trophy.",
                "to finish this game.",
                "to notice it was all just a prank",
                "to notice it was all just a social experiment.",
                "to notice that the gane has no ending.",
                "to win free overlord."
            ]
        });

        Object.defineProperty(this, "type", { value: this.gameType[Math.floor(Math.random() * this.gameType.length)], writable: true });
        Object.defineProperty(this, "objective", { value: this.gameObjective[Math.floor(Math.random() * this.gameObjective.length)], writable: true });
        Object.defineProperty(this, "reward", { value: this.gameReward[Math.floor(Math.random() * this.gameReward.length)], writable: true });
    }

    run(message) {
        // Ignore if sent in dfchat
        if (message.channel.name === "dfchat") return super.error("You can't use that here!");

        // Send a response
        message.channel.send(`[**Game**] ${this.type} ${this.objective} ${this.reward} `);
        // NEW GAME
        
        Object.defineProperty(this, "type", { value: this.gameType[Math.floor(Math.random() * this.gameType.length)], writable: true });
        Object.defineProperty(this, "objective", { value: this.gameObjective[Math.floor(Math.random() * this.gameObjective.length)], writable: true });
        Object.defineProperty(this, "reward", { value: this.gameReward[Math.floor(Math.random() * this.gameReward.length)], writable: true });
    }
};
