const keyboard = require("../keyboard/keyboard")
const { isChatMember } = require('../controller/getChatMember')
const { subscription } = require("../keyboard/inline_keyboards")

const startComamnd = (message) => {
          const result = isChatMember(message)
          result.then(response => {
                    const chatMember = response.result.status == "member" ? true : false
                    console.log(chatMember)
                    console.log(response.result.status)
                    if (chatMember) {
                              message.sendMessage(`Assalomu alaykum👋🏻 ${message.from.first_name}\n\n(𝐀𝐁𝐔𝐂𝐇𝐀𝐌𝐍𝐈𝐊𝐈) Bot ga xush kelibsiz😊\n\nMenyu orqali istalgan xizmatdan foydalanishingiz mumkun!⚡️`, keyboard.main_menu)
                    } else {
                              message.sendMessage(`Assalomu alaykum👋🏻 ${message.from.first_name}\n(𝐀𝐁𝐔𝐂𝐇𝐀𝐌𝐍𝐈𝐊𝐈) Bot ga xush kelibsiz😊\n\nBot xizmatlaridan foydalanish uchun ushbu kanallarga obuna bo’lishingiz shart!⚡️`, subscription)
                    }
          })
}

module.exports = {
          startComamnd
}