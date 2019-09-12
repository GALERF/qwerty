const Discord = require('discord.js');
const client = new Discord.Client();    


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
    if (msg.content === 'Hey') {
      msg.reply('**Welcome**');
    }
  });

client.on('message', msg => {
    if (msg.content === 'Hi') {
      msg.reply('**Welcome**');
    }
  });

client.on('message', msg => {
    if (msg.content === 'hi') {
      msg.reply('**Welcome**');
    }
  });



const devid = ["393897759905808384"] 
const devpr = "+"
client.on("message", message => {
    var chanarg = message.content.split(` `).slice(1).join(' ');
    if(!devid.includes(message.author.id)) return;
    if(message.content.startsWith('+setGa')) {
        if(!chanarg) return message.channel.send("**Please include args to Set | :x:**")
    client.user.setGame(chanarg);
    message.channel.send(`**Done Set Game ${chanarg} | :white_check_mark:**`)
      } else
    if(message.content.startsWith('+setLi')) {
        if(!chanarg) return message.channel.send("**Please include args to Set | :x:**")
    client.user.setActivity(chanarg, {type:'LISTENING'});
    message.channel.send(`**Done Set Listen ${chanarg} | :white_check_mark:**`)
      } else
    if(message.content.startsWith('+setWa')) {
        if(!chanarg) return message.channel.send("**Please include args to Set | :x:**")
    client.user.setActivity(chanarg, {type:'WATCHING'});
    message.channel.send(`**Done Set Watch ${chanarg} | :white_check_mark:**`)
      } else
    if(message.content.startsWith('+setSt')) {
        if(!chanarg) return message.channel.send("**Please include args to Set | :x:**")
    client.user.setGame(chanarg, "https://www.twitch.tv/LastBot");
    message.channel.send(`**Done Set Streaming ${chanarg} | :white_check_mark:**`)
      } else
    if(message.content.startsWith('+setName')) {
        if(!chanarg) return message.channel.send("**Please include args to Set | :x:**")
    client.user.setUsername(chanarg).then
    message.channel.send(`**Done Set Name ${chanarg} | :white_check_mark:**`)
      } else
    if(message.content.startsWith('+setAvatar')) {
        if(!chanarg) return message.channel.send("**Please include args to Set | :x:**")
    client.user.setAvatar(chanarg).then
    message.channel.send(`**Done :white_check_mark:**`)
}
}); 

client.login("MzkzODk3NzU5OTA1ODA4Mzg0.XV70fg.ZtCrf8s6nJQZcxvcxwcXH02V3e4zl5lU4");

