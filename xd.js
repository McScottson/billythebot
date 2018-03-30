const Discord = require('discord.js');
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('Your discordbots.org token');

const fs = require('fs')
client.on('ready', () => {
  client.user.setActivity(`In ${client.guilds.size} servers | b!helpme`)
  console.log(`Logged in as ${client.user.username}`);

});

client.on('message', msg => {
  if (msg.author.bot) return;
  const prefix = 'b!'
if (msg.content ===prefix + 'sad') {
  if (msg.author.id !=='203587309843513344') return msg.channel.send("Billy says that this command is for the owner only.");
  client.user.setAvatar('https://cdn.discordapp.com/attachments/424670522568212483/427261604401381376/billysad.png') && msg.channel.send("am sad now ;(")
}
  if (msg.content === prefix + 'happy') {
    if (msg.author.id !== '203587309843513344') return msg.channel.send("Billy says that this command is for the owner only.");
    client.user.setAvatar('https://cdn.discordapp.com/attachments/424670522568212483/427261596176482306/billyhappy.png') && msg.channel.send("am happy now ;)")
  }
  if (msg.content === prefix + 'mad') {
    if (msg.author.id !== '203587309843513344') return msg.channel.send("Billy says that this command is for the owner only.");
    client.user.setAvatar('https://cdn.discordapp.com/attachments/424670522568212483/427273365145911307/billymad.png') && msg.channel.send("am mad now >;(")
  }
  if (msg.content==="billy") {
    console.log(msg.author.username)
    msg.channel.send(`hi ${msg.author.username}`)
  }
  if (msg.content.startsWith(prefix+'newtext')) {
    console.log(msg.author.username)
    if (msg.member.hasPermission("MANAGE_CHANNELS")) {
      let chanName = msg.content.toString().slice(9).split(' ').join('-')
      console.log(chanName)
      msg.guild.createChannel(chanName, 'text');
    }else{
      msg.reply("Mod Command Only bby!")
    }
  }
if (msg.content ===prefix + 'quote') {
  console.log(msg.author.username)
  let quotes = ["Hey There -Billy", "Hi"]
  var quotepicker = quotes[Math.floor(Math.random() * quotes.length)];
  const embed = new Discord.RichEmbed()
  .setAuthor("Billy's Quotes", client.user.avatarURL)
    .setDescription("“*" + quotepicker + '*”')
    .setColor(0xffe15e)
    msg.channel.send('', {embed});
}

if (msg.content ==='billyhotxddddddddddd') {
  msg.channel.send(
    "Thanks Tim, I'll take it from here.\nI'm Billy, a bot made for fun and utility. I can do what all other bots can. My Prefix is `" + prefix + "`\nMore Information Coming Soon:tm:"
  );
}
if (msg.content.startsWith(prefix + 'dblstats')) {
  console.log(msg.author.username)
  let args = msg.content.slice(1).split(' ')
  if (args.isNaN) return msg.reply('Please enter an id.')
  dbl.getStats(args)
}
  if (msg.content ===prefix + 'suckme' || msg.content ===prefix + 'suck me') {
    console.log(msg.author.username)
    msg.reply("uv bean a nawty boi")
  }
  if (msg.content ===prefix + 'members') {
    console.log(msg.author.username)
    msg.channel.send(`**${msg.guild.name}** has *${msg.guild.memberCount}* members`)
  }
  if (msg.content === prefix + 'users') {
    console.log(msg.author.username)
    let usersinguild = msg.guild.members.filter(u => !u.user.bot)
    if (usersinguild.size > 1) {
      msg.channel.send(`**${msg.guild.name}** has *${usersinguild.size}* users`)
    } else {
      msg.channel.send(`**${msg.guild.name}** has *${usersinguild.size}* user`)
    }
  }

  if (msg.content ===prefix + 'support') {
    msg.author.send(
      "**Support Server**\nhttps://discord.gg/pWmrZAx"
    )
    msg.reply("Sent!")
  }
  if (msg.content ===prefix + 'roles') {
    console.log(msg.author.username)
    if (msg.member.hasPermission("MANAGE_GUILD")) {
      let rolesxd = msg.guild.roles.map(r => r.name)
      let rolesxdd = msg.guild.roles.size
      msg.channel.send(`${rolesxdd} roles. \n${rolesxd.join(', ')}`, {disableEveryone: true})
    }else {
      msg.reply("Permission Required: **MANAGE_GUILD**")
    }
  }

  if (msg.content ===prefix + 'servers') {
    console.log(msg.author.username)
    if (msg.author.id =='203587309843513344') {
      let botservers = client.guilds.map(n => n.name)
      msg.channel.send(botservers)
    } else {
      msg.channel.send("Owner Only Command")
    }
  }
  if (msg.content ===prefix + 'bots') {
    console.log(msg.author.username)
    let serverbots = msg.guild.members.filter(m => m.user.bot)
    if (serverbots.size > 1) {
      msg.channel.send(`**${msg.guild.name}** has *${serverbots.size}* bots`)
    } else {
      msg.channel.send(`**${msg.guild.name}** has *${serverbots.size}* bot`)
    }
  }
  
  if (msg.content ===prefix + 'invite') {
    console.log(msg.author.username)
    const embed = new Discord.RichEmbed()
      .setColor(0xffe15e)
    .addField("ok", 'https://discordapp.com/api/oauth2/authorize?client_id=427246423399071755&permissions=117760&scope=bot')
    msg.channel.send('', {embed})
  }
  if (msg.content ===prefix + 'helpme') {
msg.reply("Sorry! This command isn't ready yet!")
    /*console.log(msg.author.username)
    const embed = new Discord.RichEmbed()
    .setAuthor("Billy", client.user.avatarURL)
    .setDescription("Prefix is " + prefix)
      .setColor(0xffe15e)
    .addField("Sorry!", "This command isn't done!")
    if (msg.author.bot) return;
    msg.author.send('', {embed});
    */
  }

});
client.on("guildCreate", server => {
  console.log(server.name)
  client.user.setActivity(`In ${client.guilds.size} servers xd | b!helpme`)
});

client.login(process.env.BOT_TOKEN)
