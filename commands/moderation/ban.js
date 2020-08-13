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
					key: 'user',
					prompt: 'Who do you want to kick?',
					type: 'user'
				},
				{
					key: 'reason',
					prompt: 'Reason for kicking?',
					type: 'string'
				}
			]
		});
	}

	run(message, { user, reason }) {
		if (user) {
			const member = message.guild.member(user);
			if (member) {
				member.ban({ reason: reason }).then(() => {
					message.say(`:hammer: | Banned ${user.tag}`);
				}).catch(err => {
					message.reply("I am unable to ban that member.")
					console.error(err);
				});
			} else {
				message.say("That user isn't in this server.");	
			}
		} else {
			message.say("You didn't mention the user to ban.");
		}
	}
};