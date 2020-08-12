const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class AvatarCommand extends Command {
	constructor(client) {
		super(client, {
            name: 'avatar',
            aliases: ['pfp', 'icon'],
			group: 'default',
			memberName: 'avatar',
			description: 'Displays Member\'s Avatars.',
			args: [
				{
					type: "user",
					prompt: "Display which user's avatar?",
					key: "user",
					default: message => message.author
				}
			]
		});
	}

	run(message, { user }) {
		const embed = new Discord.MessageEmbed()
		.setColor('#1e1e36')
		.setTitle(`:camera_with_flash: | ${user.tag}s profile picture`)
		.setURL(user.displayAvatarURL({ dynamic: true }))
		.setImage(user.displayAvatarURL({ dynamic: true }))
		message.say(embed);
	}
};