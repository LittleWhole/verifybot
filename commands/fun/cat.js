const Base = require("../../base/Command.js");

module.exports = class Meow extends Base {
    constructor(client) {
        super(client, {
            name: "cat",
            description: "Sends a random cat image.",
            usage: "",
            category: "fun",
            permLevel: 0,
            cooldown: 60000
        });

        Object.defineProperty(this, "cats", {
            value: [
                "http://random.cat/i/uUi0a.jpg",
                "http://random.cat/i/mFC8oVK.jpg",
                "http://random.cat/i/YTgRq.jpg",
                "http://random.cat/i/o7pjQLT.jpg",
                "http://random.cat/i/iVpaM.jpg",
                "http://random.cat/i/249053_10151615620946211_1427883182_n.jpg",
                "http://random.cat/i/Nmn7a.jpg",
                "http://random.cat/i/VjIboF2.jpg",
                "http://random.cat/i/img_20161017_122411.jpg",
                "http://random.cat/i/GQXOl.png",
                "http://random.cat/i/t3nMb.jpg",
                "http://random.cat/i/iVpaM.jpg",
                "http://random.cat/i/riGL8.jpg",
                "http://random.cat/i/uWjbg.jpg",
                "https://purr.objects-us-west-1.dream.io/i/img_3499.jpg",
                "https://purr.objects-us-west-1.dream.io/i/image.jpeg",
                "https://purr.objects-us-west-1.dream.io/i/fergus_05.jpg",
                "https://purr.objects-us-west-1.dream.io/i/8O1TS.jpg",
                "https://purr.objects-us-west-1.dream.io/i/montyhiking.jpeg",
                "https://purr.objects-us-west-1.dream.io/i/0c7gC.jpg",
                "https://purr.objects-us-west-1.dream.io/i/img_0178.jpg",
                "https://purr.objects-us-west-1.dream.io/i/OoNx6.jpg",
                "https://purr.objects-us-west-1.dream.io/i/ginger2.jpg",
                "https://purr.objects-us-west-1.dream.io/i/221.jpg",
                "https://purr.objects-us-west-1.dream.io/i/6160178551_e828a193b2_z.jpg",
                "https://purr.objects-us-west-1.dream.io/i/isabel.jpg",
                "https://purr.objects-us-west-1.dream.io/i/2015-09-17-214.jpg",
                "https://purr.objects-us-west-1.dream.io/i/oThuh.jpg",
                "https://purr.objects-us-west-1.dream.io/i/7VnxKqw.jpg",
                "https://purr.objects-us-west-1.dream.io/i/DOjFh.jpg",
                "https://purr.objects-us-west-1.dream.io/i/4d7f9782cda044f0847c28803adb0f6b.jpg",
                "https://purr.objects-us-west-1.dream.io/i/tcjk2051.jpg",
                "https://purr.objects-us-west-1.dream.io/i/img_20170520_143600.jpg",
                "https://purr.objects-us-west-1.dream.io/i/lmiGH.jpg",
                "https://purr.objects-us-west-1.dream.io/i/p6bnR.jpg",
                "https://purr.objects-us-west-1.dream.io/i/QPhJb.jpg",
                "https://purr.objects-us-west-1.dream.io/i/pallascat-pileoffloof.jpg",
                "https://purr.objects-us-west-1.dream.io/i/img_20160411_061203.jpg",
                "https://purr.objects-us-west-1.dream.io/i/esI3L.jpg",
                "https://purr.objects-us-west-1.dream.io/i/33image2.jpg",
                "https://purr.objects-us-west-1.dream.io/i/img_20170904_234526.jpg",
                "https://purr.objects-us-west-1.dream.io/i/hgyw6Tc.jpg",
                "https://purr.objects-us-west-1.dream.io/i/1NfYmpq.jpg",
                "https://purr.objects-us-west-1.dream.io/i/EwXHN.jpg",
                "https://purr.objects-us-west-1.dream.io/i/iqROl.jpg",
                "https://purr.objects-us-west-1.dream.io/i/20170214_180225.jpg",
                "https://purr.objects-us-west-1.dream.io/i/UNb83.jpg",
                "https://purr.objects-us-west-1.dream.io/i/img_0736.jpg",
                "https://purr.objects-us-west-1.dream.io/i/4392155750_100d81d83b_b.jpg",
                "https://purr.objects-us-west-1.dream.io/i/OADxt.jpg",
                "https://purr.objects-us-west-1.dream.io/i/catiiidi.jpg",
                "https://purr.objects-us-west-1.dream.io/i/W8Er0Bt.jpg",
                "https://purr.objects-us-west-1.dream.io/i/11226561_939465719444268_5011472048854498701_n.jpg",
                "https://purr.objects-us-west-1.dream.io/i/scottishfold.jpg",
                "https://purr.objects-us-west-1.dream.io/i/8kWBuwm.jpg",
                "https://purr.objects-us-west-1.dream.io/i/lyYNd.jpg",
                "https://purr.objects-us-west-1.dream.io/i/esI3L.jpg",
                "https://purr.objects-us-west-1.dream.io/i/xhfMW.jpg",
                "https://purr.objects-us-west-1.dream.io/i/image1-3.jpg",
                "https://purr.objects-us-west-1.dream.io/i/gandalf1.jpg",
                "https://purr.objects-us-west-1.dream.io/i/urYhUVm.jpg",
                "https://purr.objects-us-west-1.dream.io/i/my_2cats_black&white1.jpg",
                "https://purr.objects-us-west-1.dream.io/i/img_20131111_094048.jpg",
                "https://purr.objects-us-west-1.dream.io/i/montybeach.jpeg",
                "https://purr.objects-us-west-1.dream.io/i/dozTO.jpg",
                "https://purr.objects-us-west-1.dream.io/i/XueQd.jpg",
                "https://purr.objects-us-west-1.dream.io/i/uUyDqNj.jpg",
                "https://purr.objects-us-west-1.dream.io/i/r124.jpg",
                "https://purr.objects-us-west-1.dream.io/i/simonthecat..jpg",
                "https://purr.objects-us-west-1.dream.io/i/sB7Y9.jpg",
                "https://purr.objects-us-west-1.dream.io/i/montybeach.jpeg",
             // GIFS
                "http://random.cat/i/068_-_6vuLGR1.gif",
                "http://random.cat/i/054_-_o8Oe3pb.gif",
                "https://purr.objects-us-west-1.dream.io/i/059_-_RJ9CufX.gif",
                "https://purr.objects-us-west-1.dream.io/i/085_-_uRuU0ni.gif",
             // Discord Cats
                "https://cdn.discordapp.com/attachments/423571873079492619/423573937251680258/9k.png from **Chewyball10**",
                "https://cdn.discordapp.com/attachments/423571873079492619/423613906859196419/KILLER_CATZ.png from **Cowpcake**",
                "https://cdn.discordapp.com/attachments/423571873079492619/423613942447734795/cat_3.jpg from **Cowpcake**",
                "https://cdn.discordapp.com/attachments/423571873079492619/423613885711384576/hungry_cat.jpg from **Cowpcake**",
                "https://cdn.discordapp.com/attachments/239551387627814922/423892648546271232/image.jpg from **Majik**",
                "https://cdn.discordapp.com/attachments/236949238032891904/423892737255931904/image.jpg from **Majik**",
                "https://cdn.discordapp.com/attachments/236949238032891904/423892758982295552/image.jpg from **Majik**",
                "https://cdn.discordapp.com/attachments/236949238032891904/423892866486501376/image.jpg from **Majik**",
                "https://cdn.discordapp.com/attachments/236949238032891904/423892978508234772/image.jpg from **Majik**",
                "https://cdn.discordapp.com/attachments/236949238032891904/423893058141028354/image.jpg from **Majik**",
                "https://cdn.discordapp.com/attachments/423571873079492619/427280046055751680/Mreow.png from **ArtificalLegacy**",
                "https://cdn.discordapp.com/attachments/423571873079492619/427280021015625729/NO.gif from **ArtificalLegacy**",
             // Dubzini
                "https://cdn.discordapp.com/attachments/423321409918599169/423872111724068864/IMG_20180315_165615.jpg"
            ]
        });

        Object.defineProperty(this, "chosen", { value: this.cats[Math.floor(Math.random() * this.cats.length)], writable: true });
    }

    run(message) {
        // Ignore if sent in dfchat
        if (message.channel.name === "dfchat") return super.error("You can't use that here!");

        // Send a response
        message.channel.send(`[**Cat**] ${this.chosen}`);
        // Get a new cat
        this.chosen = this.cats[Math.floor(Math.random() * this.cats.length)];
    }
};
