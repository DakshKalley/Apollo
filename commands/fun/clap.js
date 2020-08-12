const { Command } = require('discord.js-commando');

module.exports = class ClapCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'clap',
			group: 'fun',
			memberName: 'clap',
            description: 'Adds clap emote between words.',
            args: [
                {
                    key: 'text',
                    prompt: 'What text would you like the bot to clap? (50 Words Max.)',
                    type: 'string',
                    validate: text => text.length < 51,
                },
            ],
		});
	}

	run(message, { text }) {
        const phrase = text.split(' ');
        let msg = (":clap: ")
        for (let i in phrase){
            msg += (phrase[i] + " :clap: ");
        }
        message.say(msg);
	}
};