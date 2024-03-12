const axios = require('axios')

const TELEGRAM_CHAT_MEMBER = `https://api.telegram.org/bot6950554574:AAEAwJXIRQT21QArLL2vqaImH18Mi8ybn3g/getChatMember`

const isChatMember = async (message) => {
          try {
                    const result = await axios.get(TELEGRAM_CHAT_MEMBER, {
                              data: {
                                        chat_id: -1002140005660,
                                        user_id: message.from.id,
                              }
                    })
                    console.log(result.data, "contoller.js")
                    return result.data
          } catch (err) {
                    console.log("Xatolar mavjud !", err)
          }
}

module.exports = {
          isChatMember,
}