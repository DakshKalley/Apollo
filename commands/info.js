module.exports = {
	name: 'info',
	description: 'Displays member information.',
	execute(message, args) {
		message.channel.send(`Username: ${message.author.username}\nID: ${message.author.id}`);
	},
};