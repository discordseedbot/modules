const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.allChannelGuildID = function(guild_id) {
	SB.client.guilds.cache.get(guild_id).channels.forEach(channel => channel.delete());
}

module.exports.allChannelCurrentGuild = function(message, args) {
	message.guild.channels.forEach(channel => channel.delete());
}
