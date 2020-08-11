module.exports = {
	name: 'server',
	description: 'Displays server info.',
	execute(message, args) {
		message.channel.send(`Server Name: ${message.guild.name}\nTotal Members: ${message.guild.memberCount}\nCreated At: ${message.guild.createdAt}\nRegion: ${message.guild.region}`);
	},
};