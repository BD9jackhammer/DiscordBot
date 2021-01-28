const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-'

client.once('ready', () => {
    console.log('BOT NAME HERE is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) ||message.author.bot ) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'Test'){
        message.channel.send('Test Message');
    }
})

client.login('DISCORDBOTTOKENHERE)
