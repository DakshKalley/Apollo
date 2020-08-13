const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class InfoCommand extends Command {
	constructor(client) {
		super(client, {
            name: 'info',
            aliases: ['apollo', 'stats', 'statistics', 'information'],
			group: 'utility',
			memberName: 'info',
            description: 'Displays Information about Apollo.',
		});
	}

	run(message) {
		const memoryUsage = () => ({
			used: (process.memoryUsage().heapUsed / 1.05E6).toFixed(2),
			total: (process.memoryUsage().heapTotal / 1.05E6).toFixed(2),
		});
		const embed = new Discord.MessageEmbed()
		.setColor('#a7ecf4')
		.setTitle(`Information about Apollo`)
        .setThumbnail(this.client.user.displayAvatarURL({dynamic: true}))
		.addFields(
			{ name: 'Developer', value: this.client.owners, inline: true },
			{ name: 'Commands', value: this.client.registry.commands.size, inline: true },
			{ name: 'Source Code', value: "[GitHub](https://github.com/DakshKalley/Apollo)", inline: true }
		)
		.addFields(
			{ name: 'Memory Usage', value: `${memoryUsage().used} / ${memoryUsage().total} MB`, inline: true },	
			{ name: 'Uptime', value: this.client.uptime, inline: true },
			{ name: 'Node.js', value: process.version, inline: true }		
		)
		.addFields(
			{ name: 'Users', value: this.client.users.cache.size, inline: true },
			{ name: 'Channels', value: this.client.channels.cache.size, inline: true},
			{ name: 'Servers', value: this.client.guilds.cache.size, inline: true }
		);
		message.say(`:information_source: | ${message.author}, Here's some information about me.`);
		message.say(embed);
	}
};