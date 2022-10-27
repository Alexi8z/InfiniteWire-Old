const { MessageEmbed } = require('discord.js')
const axios = require("axios");

module.exports = {
  name: 'car',
  description: 'car PICTURES bro',
  cooldown: 3,
  type: "SUB_COMMAND",
  options: [
    {
      name: 'type',
      description: 'Pick picture type!',
      type: 'STRING',
      required: true,
      choices: [
        {
          name: "Random",
          value: "random"
        },
        {
          name: "Skyline R34",
          value: "R34"
        },
        {
          name: "GT-R",
          value: "gtr"
        },
        {
          name: "Supra MK4",
          value: "mk4"
        }
      ]
    }
  ],
  run: async function(client, interaction, args) {
    let value = args.join(" ")
    if (value === "random") {
    const r = await axios.get("https://api.popcat.xyz/car")
    const value = await r.data 
    let embed = new MessageEmbed()
    .setTitle(value.title)
    .setImage(value.image)
    .setColor("BLUE")
    await interaction.followUp({ embeds: [embed] })
    }
    if (value === "R34") {
      let min, max;
        if (args[0] && args[1]) {
            min = parseInt(args[0]);
            max = parseInt(args[1]);
        } else {
            min = 0;
            max = 35;
        }

        const result = Math.round(Math.random() * (max - min) + min);
      let embed = new MessageEmbed()
    .setTitle("Nissan Skyline R34") .setImage(`https://dashboardiw.drifty65.repl.co/cars/34GTR/${result}.jpg`)
    .setFooter(`IMG ID: ${result}`)
    .setColor("RANDOM")
    await interaction.followUp({ embeds: [embed] })
    }
    if (value === "gtr") {
      let min, max;
        if (args[0] && args[1]) {
            min = parseInt(args[0]);
            max = parseInt(args[1]);
        } else {
            min = 0;
            max = 45;
        }

        const result = Math.round(Math.random() * (max - min) + min);
      let embed = new MessageEmbed()
    .setTitle("Nissan GT-R (Skyline R35)") .setImage(`https://dashboardiw.drifty65.repl.co/cars/GTR/${result}.jpg`)
    .setColor("RANDOM")
    .setFooter(`IMG ID: ${result}`)
    await interaction.followUp({ embeds: [embed] })
    }
    if (value === "mk4") {
      let min, max;
        if (args[0] && args[1]) {
            min = parseInt(args[0]);
            max = parseInt(args[1]);
        } else {
            min = 0;
            max = 22;
        }

        const result = Math.round(Math.random() * (max - min) + min);
      let embed = new MessageEmbed()
    .setTitle("Toyota Supra MK4") .setImage(`https://dashboardiw.drifty65.repl.co/cars/MK4SUPRA/${result}.jpeg`)
    .setColor("RANDOM")
    .setFooter(`IMG ID: ${result}`)
    await interaction.followUp({ embeds: [embed] })
    }
  }
}
