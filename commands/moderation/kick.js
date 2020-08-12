const { Command } = require('discord.js-commando');

module.exports = class KickCommand extends Command {
	constructor(client) {
		super(client, {
            name: 'kick',
			group: 'moderation',
			memberName: 'kick',
            description: 'Kicks a member.',
            guildOnly: true,
            clientPermissions: ['ADMINISTRATOR'],
            userPermissions: ['KICK_MEMBERS'],
		});
	}

	run(message) {
		const member = message.mentions.members.first();
		member.kick();
	}
};