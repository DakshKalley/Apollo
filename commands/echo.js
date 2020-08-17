const { prefix } = require('../config.json');

module.exports = {
	name: 'echo',
	description: 'Echo your text in another channel.',
	args: true,
	usage: '<optional channel>  <message>',
	guildOnly: true,
	cooldown: 1,
	execute(message, args) {
        if (!message.mentions.channels.first()){
            message.channel.send('You need to specify a channel.');
        } else {
            let chid = (message.mentions.channels.first().id);
            let msgch = (message.client.channels.cache.get(chid));
            let msgct = (message.content.replace(`a!echo ${args[0]}`, ''));
            if (msgct){
                msgch.send(msgct);
            } else {
                message.channel.send('Cannot echo an empty message.');
            }
        }
	},
};