module.exports = {
	name: 'clap',
	description: 'Adds clap emote between words.',
	args: true,
	usage: '<text>',
	guildOnly: true,
	execute(message, args) {
        let msg = (":clap: ")
        for (let i in args){
            msg += (args[i] + " :clap: ");
        }
        message.channel.send(msg);
	},
};