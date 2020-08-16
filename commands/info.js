const Discord = require('discord.js');
const { owner } = require('.././config.json');


module.exports = {
	name: 'info',
	description: 'Displays information about Apollo.',
	aliases: ['apollo', 'stats', 'statistics', 'information'],
	usage: '',
	execute(message) {
		const client = message.client;
		const memoryUsage = () => ({
			used: (process.memoryUsage().heapUsed / 1.05E6).toFixed(2),
			total: (process.memoryUsage().heapTotal / 1.05E6).toFixed(2),
		});
		const embed = new Discord.MessageEmbed()
		.setColor('#a7ecf4')
		.setTitle(`Information about Apollo`)
        .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
		.addFields(
			{ name: 'Developer', value: client.users.cache.get(owner).tag, inline: true },
			{ name: 'Commands', value: client.commands.size, inline: true },
			{ name: 'Source Code', value: "[GitHub](https://github.com/DakshKalley/Apollo)", inline: true }
		)
		.addFields(
			{ name: 'Memory Usage', value: `${memoryUsage().used} / ${memoryUsage().total} MB`, inline: true },	
			{ name: 'Uptime', value: client.uptime, inline: true },
			{ name: 'Node.js', value: process.version, inline: true }		
		)
		.addFields(
			{ name: 'Users', value: client.users.cache.size, inline: true },
			{ name: 'Channels', value: client.channels.cache.size, inline: true},
			{ name: 'Servers', value: client.guilds.cache.size, inline: true }
		);
        message.channel.send(`:information_source: | ${message.author}, Here's some information about me.`);
		message.channel.send(embed);
	},
};