module.exports = {
	name: 'roll',
	description: 'Roll dice for a random value.',
	execute(message) {
        const roll = (Math.floor(Math.random()*6) + 1);
        message.channel.send(`Rolled a ${roll}!`);
	},
};