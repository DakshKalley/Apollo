module.exports = {
	name: 'info',
	description: 'Display info about a member.',
	execute(message) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Username: ${message.author.username}\nID: ${message.author.id}`);
		}
		const user = message.mentions.users.first();
		return message.channel.send(`Username: ${user.username}\nID: ${user.id}`);
	},
};