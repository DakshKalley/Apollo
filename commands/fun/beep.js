module.exports = {
	name: 'beep',
	description: 'Beep!',
	aliases: ['beepboop'],
	args: false,
	usage: 'a!beep',
	guildOnly: false,
	cooldown: 1,
	execute(message, args) {
		message.channel.send('Boop!');
	},
};