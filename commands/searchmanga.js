const { MessageEmbed } = require('discord.js')
exports.execute = async (client, message, args) => {
    let baseurl = 'https://comick.fun/search?q='
    const dentifier = args.slice().join('%20')
    const embed = new MessageEmbed()
    const url = `${baseurl}` + `${dentifier}`;
    embed.setTitle(`🔎 Search Results For Manga ${args.slice().join(' ')}`)
    embed.setColor('RANDOM')
    embed.setDescription(`**[Here Is What You Wanted](${url})**`)
    embed.setTimestamp()
    embed.setFooter(`Made by 0_0#6666 and Arisu#0404`)
    message.channel.send(`Please Check Your Direct Messages For The Search Results!`)
    message.author.send(embed)
  
}

exports.help = {
  name: "searchmanga",
  aliases: ['sm']
};