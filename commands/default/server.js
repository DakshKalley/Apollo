const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class ServerCommand extends Command {
	constructor(client) {
		super(client, {
            name: 'server',
            aliases: ['serverinfo'],
			group: 'default',
			memberName: 'server',
            description: 'Displays Server Information.',
            guildOnly: true
		});
	}

	run(message) {
		if (message.guild.available){
			const embed = new Discord.MessageEmbed()
			.setColor('#1e1e36')
			.setTitle(`${message.guild.name}`)
			.setThumbnail(`${message.guild.iconURL()}`)
			.addField('Server Owner', message.guild.owner)
			.addField('Members', message.guild.memberCount, true)
			.addField('Channels', message.guild.channels.cache.size, true)
			.addField('Roles', message.guild.roles.cache.size, true);
			const regionstat = {
				"us-west": {
				  name: "US West",
				  emoji: "🇺🇸",
				},
				"us-east": {
				  name: "US East",
				  emoji: "🇺🇸",
				},
				"us-central": {
				  name: "US Central",
				  emoji: "🇺🇸",
				},
				"us-south": {
				  name: "US South",
				  emoji: "🇺🇸",
				},
				singapore: {
				  name: "Singapore",
				  emoji: "🇸🇬",
				},
				southafrica: {
				  name: "South Africa",
				  emoji: "🇿🇦",
				},
				sydney: {
				  name: "Sydney",
				  emoji: "🇦🇺",
				},
				brazil: {
				  name: "Brazil",
				  emoji: "🇧🇷",
				},
				hongkong: {
				  name: "Hong Kong",
				  emoji: "🇭🇰",
				},
				russia: {
				  name: "Russia",
				  emoji: "🇷🇺",
				},
				japan: {
				  name: "Japan",
				  emoji: "🇯🇵",
				},
				india: {
				  name: "India",
				  emoji: "🇮🇳",
				},
				"eu-central": {
				  name: "Central Europe",
				  emoji: "🇪🇺",
				},
				"eu-west": {
				  name: "Western Europe",
				  emoji: "🇪🇺",
				},
			};			
			const region = message.guild.region;
			embed
			.addField('Voice Region', `${regionstat[region].emoji} ${regionstat[region].name}`, true)
			.setTimestamp(new Date(message.guild.createdAt))
    		.setFooter("Server created on");
			message.say(`:man_tipping_hand_tone3: | ${message.author}, Here's some information on this server.`);
			message.say(embed);
		}
	}
};