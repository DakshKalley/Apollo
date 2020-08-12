const { Command } = require('discord.js-commando');

module.exports = class NightCommand extends Command {
	constructor(client) {
		super(client, {
            name: 'goodnight',
            aliases: ['gn', 'night', 'nitenite'],
			group: 'fun',
			memberName: 'goodnight',
			description: 'Tell Apollo Goodnight :)',
			throttling: {
				usages: 2,
				duration: 10,
			},
		});
	}

	run(message) {
		message.say(':first_quarter_moon: | Goodnight! :zzz:');
	}
};