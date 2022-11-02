const TelegramBot = require('node-telegram-bot-api')

console.log(process.argv[2])

const token = process.env.TELEGRAM_BOT_TOKEN || process.argv[1]

const bot = new TelegramBot(token, { polling: true })

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id
    const resp = match[1]

    bot.sendMessage(chatId, resp)
})

bot.on('message', (msg) => {
    const chatId = msg.chat.id

    bot.sendMessage(chatId, 'Received your message')
})