const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const config = require('./config.json');
const client = new CommandoClient({
	commandPrefix: 'a!',
	owner: '266253148212035584',
	invite: '',
	unknownCommandResponse: false,
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['default', 'Apollo\'s Default Commands'],
		['moderation', 'Apollo\'s Moderation Commands'],
		['fun', 'Apollo\'s Fun Commands']
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

	client.once('ready', () => {
		console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
		client.user.setActivity('a!help');
	});
	
	client.on('error', console.error);
	client.login(config.token);
