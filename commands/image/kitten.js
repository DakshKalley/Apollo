const Discord = require('discord.js');

module.exports = {
	name: 'kitten',
	description: 'Post a random cute kitten! :cat: ',
	args: false,
	usage: '',
	guildOnly: true,
	cooldown: 1,
	execute(message) {
		message.channel.send('This command is currently under construction.');
	},
};