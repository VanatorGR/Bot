const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
    console.log("Je suis connecté !")
})

bot.login('')

bot.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong !')
    }
    if (message.member.displayName === 'Vanator') {
        message.reply('Coucou')
    }
})

bot.on('presenceUpdate', e => {
    if (e.presence.status === 'online') {
        const chan = e.guild.channels.get('443530241378615350')
        if (chan) {
            console.log(e.user.username)
            const h = (new Date()).toLocaleTimeString('frFR')
            if (e.user.username === 'Vanator') {
                chan.send(`Il est ${h}, et Raphael est la!`)
            } else {
                chan.send(`Salut ${e.user.username}`)
            }
        }
    }
})