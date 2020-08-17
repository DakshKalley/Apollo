module.exports = {
	name: 'dolphin',
	description: 'Adds dolphin emote between words.',
	args: true,
	usage: '<text>',
	guildOnly: true,
	execute(message, args) {
        let msg = (":dolphin: ")
        for (let i in args){
            msg += (args[i] + " :dolphin: ");
        }
        message.channel.send(msg);
	},
};