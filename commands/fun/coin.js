const { Command } = require('discord.js-commando');

module.exports = class CoinCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'coin',
			aliases: ['toss', 'flip'],
			group: 'fun',
			memberName: 'coin',
            description: 'Flips a coin to receive heads or tails.',
		});
	}

	run(message) {
        let choice = ['Heads', 'Tails'];
        let result = choice[Math.floor(Math.random()*choice.length)];
        message.reply(result);
	}
};