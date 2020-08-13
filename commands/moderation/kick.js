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
				member.kick(reason).then(() => {
					message.say(`:wave: | Kicked ${user.tag}`);
				}).catch(err => {
					message.reply("I am unable to kick that member.")
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