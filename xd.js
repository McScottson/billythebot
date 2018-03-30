const Discord = require('discord.js')
const fs = require('fs')
const client = new Discord.Client()
let servers = []
let prefix = "sp-"
client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}`)
});
client.on('message', msg => {
  if (msg.channel.id =='429053675604934686') {
    if (!msg.content.startsWith('discord.gg/')) {
      let array = [];
msg.delete();
msg.author.send("Discord Invites Only!")
    }else{
client.users.get('203587309843513344').send(msg.content)
    }
  }


});

client.on('guildCreate', guild => {
  let guildOwner = guild.owner;
  const embed = new Discord.RichEmbed()
  .setAuthor("ServerPrime", client.user.avatarURL)
  .setDescription("Server Prime is a bot that's made for syncing your guild to a database.")
  guildOwner.send({embed});
})


client.login(process.env.BOT_TOKEN)
