module.exports = {
	name: 'coin',
    description: 'Flips a coin to receive heads or tails.',
    aliases: ['toss', 'flip'],
	args: false,
	usage: '<text>',
    guildOnly: true,
	execute(message) {
        let choice = ['Heads', 'Tails'];
        let result = choice[Math.floor(Math.random()*choice.length)];
        message.reply(result);
	},
};


