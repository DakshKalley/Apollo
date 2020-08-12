const { Command } = require('discord.js-commando');

module.exports = class ServerCommand extends Command {
	constructor(client) {
		super(client, {
            name: 'server',
            aliases: ['serverinfo'],
			group: 'default',
			memberName: 'server',
            description: 'Displays Server Information.',
            guildOnly: true
		});
	}

	run(message) {
		return message.say('Boop!');
	}
};