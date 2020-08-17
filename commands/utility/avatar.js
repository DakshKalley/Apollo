const Discord = require('discord.js');

module.exports = {
	name: 'avatar',
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	aliases: ['icon', 'pfp'],
	execute(message) {
		let taggedUser = message.mentions.users.first();
		if (!taggedUser){
			taggedUser = message.author;
		}
		const embed = new Discord.MessageEmbed()
		.setColor('#a7ecf4')
		.setTitle(`:camera_with_flash: | ${taggedUser.tag}'s profile picture`)
		.setURL(taggedUser.displayAvatarURL({ dynamic: true }))
		.setImage(taggedUser.displayAvatarURL({ dynamic: true }))
		message.channel.send(embed);
	},
};