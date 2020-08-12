const { Command } = require('discord.js-commando');

module.exports = class WfboCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'wfbo',
			aliases: ['weirdflexbutokay'],
			group: 'fun',
			memberName: 'wfbo',
            description: 'Weird Flex But Okay Generator.',
		});
	}

	run(message) {
        let weirdSynonyms = ["Weird", "Odd", "Bizarre", "Eccentric", "Funky", "Kooky", "Peculiar", "Strange", "Qeer", "Oddball", "Uncanny", "Outlandish"]
        let flexSynonyms = ["flex", "boast", "brag", "braggadocio", "exaggeration", "vaunt", "grandiloquence"]
        let butSynonyms = ["but", "yet"]
        let okaySynonyms = ["okay", "acceptable", "satisfactory", "alright", "approved", "correct", "fair", "fine", "permitted", "accurate", "adequate", "convenient", "passable", "tolerable", "let's toast", "👌", "🆗"]
        let ws = weirdSynonyms[Math.floor(Math.random()*weirdSynonyms.length)];
        let fs = flexSynonyms[Math.floor(Math.random()*flexSynonyms.length)];
        let bs = butSynonyms[Math.floor(Math.random()*butSynonyms.length)];
        let os = okaySynonyms[Math.floor(Math.random()*okaySynonyms.length)];
        message.say(":muscle: | **" + ws + " " + fs + " " + bs + " " + os + "**");
	}
};