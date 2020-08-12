const { Command } = require('discord.js-commando');

module.exports = class BanCommand extends Command {
	constructor(client) {
		super(client, {
            name: 'ban',
			group: 'moderation',
			memberName: 'ban',
            description: 'Bans a member.',
            guildOnly: true,
            clientPermissions: ['ADMINISTRATOR'],
            userPermissions: ['BAN_MEMBERS'],
		});
	}

	run(message) {
		return message.say('Boop!');
	}
};