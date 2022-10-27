const Discord = require("discord.js");
const simplydjs = require("simply-djs");

const client = new Discord.Client({
  allowedMentions: {
    parse: ['roles'],
    repliedUser: false
  },
  intents: [ 
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_BANS,
    Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
    Discord.Intents.FLAGS.GUILD_WEBHOOKS,
    Discord.Intents.FLAGS.GUILD_INVITES,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES,
    Discord.Intents.FLAGS.GUILD_PRESENCES,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Discord.Intents.FLAGS.DIRECT_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING
  ],
  presence: {
    activities: [{
      name: '/help | 3 Servers!',
      type: 'PLAYING'
    }],
  }
});
client.on('ready', () => {
   const express = require('express')
   const app = express();
   const port = 8080;

app.get('/', (req, res) => res.send(`Listening to port ${port}.`))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);
	console.log(`[INFO]: Ready on client (${client.user.tag})`);
	console.log(
		`[INFO]: watching ${client.guilds.cache.size} Servers, ${
			client.channels.cache.size
		} channels & ${client.users.cache.size} users`
	);
//-----------------------------------------------\\
},
require('./src/handler.js')(client));
client.on("messageCreate", async message => {
const mentionRegex = RegExp(`^<@!?1011623291187892306>$`);
     
  if (message.content.match(mentionRegex)) {
     const embed = new Discord.MessageEmbed()
    .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
      .setDescription(`Hey <@${message.author.id}>, My global/server prefix is \`\`\`/\`\`\` Use \`\`\`/help\`\`\`  to get a list of commands`)
       .setColor("RANDOM")
       .setFooter(`Requested by ${message.author.username}`)
       .setTimestamp() 
      return message.channel.send({ embeds: [embed] });
  }},
module.exports = {
    search: require("./wiki/search.js"),
    clearance: require("./wiki/clearance.js"),
    personnel: require("./wiki/personnel.js"),
    titles: require("./wiki/titles.js")
})
    
client.on("messageDelete", async message => {
     simplydjs.ghostPing(message, {
})})

process.on('unhandledRejection', (err) => console.log(err));
