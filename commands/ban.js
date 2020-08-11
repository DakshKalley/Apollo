module.exports = {
	name: 'ban',
	description: 'Tag a member and ban them.',
	guildOnly: true,
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to ban them!');
		}

        const user = message.mentions.users.first();
        const member = message.guild.member(user);
		member.ban().then((member) => {
            message.channel.send(":hammer: | " + member.displayName + " has been successfully banned.");
        }).catch(() => {
            message.channel.send("Access Denied");
        });
	},
};