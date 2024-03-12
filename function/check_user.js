const { isChatMember } = require("../controller/getChatMember")
const { main_menu } = require("../keyboard//keyboard")
const { subscription } = require("../keyboard/inline_keyboards")


const check_user = (callback) => {
          callback.deleteMessage()
          const result = isChatMember(callback.update.callback_query)
          result.then(response => {
                    const chatMember = response.result.status == "member" ? true : false
                    console.log(chatMember)
                    if (chatMember) {
                              callback.sendMessage(`Assalomu alaykum👋🏻\n\n(𝐀𝐁𝐔𝐂𝐇𝐀𝐌𝐍𝐈𝐊𝐈) Bot ga xush kelibsiz😊\n\nMenyu orqali istalgan xizmatdan foydalanishingiz mumkun!⚡️`, main_menu)
                    }
                    else {
                              callback.sendMessage(`Kechirasiz siz kanallarga obuna bo’lmadingiz qaytadan urinib ko’ring iltimos!🖇️😊`,subscription)
                    }
          })
          console.log(callback.update.callback_query.from.id)
}

module.exports = {
          check_user
}