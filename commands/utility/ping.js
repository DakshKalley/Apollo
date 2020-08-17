module.exports = {
	name: 'ping',
	description: 'Ping!',
	cooldown: 1,
	execute(message) {
		message.channel.send("Pinging...").then(msg =>{
			  var ping = msg.createdTimestamp - message.createdTimestamp;
			  msg.edit(`:ping_pong: | Pong! The message round-trip took ${ping}ms.`)
		  });
	},
};