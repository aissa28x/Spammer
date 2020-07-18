const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("734069073041817650")
setInterval(function() {
channel.send(`قاعد اجيب كريديتس بدون ماتعب ههههه`);
}, 30)
})

client.login(process.env.BOT_TOKEN);