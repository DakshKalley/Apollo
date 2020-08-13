const { Command } = require('discord.js-commando');

module.exports = class DolphinCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'dolphin',
			group: 'fun',
			memberName: 'dolphin',
            description: 'Adds dolphin emote between words.',
            args: [
                {
                    key: 'text',
                    prompt: 'What text would you like the bot to split between dolphins? (200 Characters Max.)',
                    type: 'string',
                    validate: text => text.length < 201,
                },
            ],
		});
	}

	run(message, { text }) {
        const phrase = text.split(' ');
        let msg = (":dolphin: ")
        for (let i in phrase){
            msg += (phrase[i] + " :dolphin: ");
        }
        message.say(msg);
	}
};