const { Command } = require('discord.js-commando');

module.exports = class BeepCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'beep',
			group: 'fun',
			memberName: 'beep',
			description: 'Checks if Apollo is online.',
			throttling: {
				usages: 2,
				duration: 10,
			},
		});
	}

	run(message) {
		message.say('Boop!');
	}
};