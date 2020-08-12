const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'say',
			aliases: ['parrot', 'copy'],
			group: 'fun',
			memberName: 'say',
            description: 'Replies with the text you provide.',
            args: [
                {
                    key: 'text',
                    prompt: 'What text would you like the bot to say? (200 Words Max.)',
                    type: 'string',
                    validate: text => text.length < 201,
                },
            ],
		});
	}

	run(message, { text }) {
        message.reply(text);
	}
};