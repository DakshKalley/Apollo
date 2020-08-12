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
			args: [
				{
					type: "user",
					prompt: "Which user do you want to ban?",
					key: "user"
				}
			]
		});
	}

	run(message) {
		message.guild.member(user).ban('Reason');
		message.say(":hammer: | Banned " + user);
	}
};