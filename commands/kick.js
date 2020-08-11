module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them.',
	guildOnly: true,
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
		}

		const member = message.mentions.members.first();
		member.kick().then((member) => {
            message.channel.send(":wave: | " + member.displayName + " has been successfully kicked.");
        }).catch(() => {
            message.channel.send("Access Denied");
        });
	},
};