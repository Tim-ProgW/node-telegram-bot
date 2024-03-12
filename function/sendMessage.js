const { inline_admin } = require("../keyboard/inline_keyboards")
const { instagramDownloader } = require("../function/downloadInstagram")
const { isChatMember } = require("../controller/getChatMember")
const { subscription } = require("../keyboard/inline_keyboards")

const send_photo = (message) => {
          const result = isChatMember(message)
          const include_file = message.text.split(" ")
          const url_text = message.text.split('.')
          console.log(include_file)
          result.then(res => {
                    if (res.result.status == "member") {
                              if (include_file.includes('Darslik')) {
                                        message.sendMessage(`
                                        Xozirda bizda bunday xizmat mavjud emas!🤝`)
                              }
                              if (include_file.includes("Reklama")) {
                                        message.sendMessage(`
                                        Xozirda bizda reklama xizmati mavjud emas!🤝\n\nTez orada reklama xizmatlarini yo’lga qo’yamiz!😉\n\nBizni tanlaganingiz uchun raxmat!`)
                              }

                              if (include_file.includes("Admin")) {
                                        message.sendMessage("Biz bilan bog’lanish uchun pastdagi (ADMIN) tugmasidan foydalanishingiz mumkin!☺️", inline_admin)
                              }


                              if (url_text.includes('instagram')) {
                                        const message_id = message.sendMessage("⏳")
                                        try {
                                                  const response = instagramDownloader(message.text)
                                                  response.then(res => {
                                                            message.sendVideo(res.file_url, {
                                                                      caption: `Ushbu video Instagramdagi (𝐀𝐁𝐔𝐂𝐇𝐀𝐌𝐍𝐈𝐊𝐈) kanalining\ntelegramdagi rasmiy Boti orqali yuklab olindi!\n👇👇👇👇👇👇👇\n@Abuchamniki_bot`
                                                            })
                                                            message_id.then(res => {
                                                                      message.deleteMessage(res.message_id)
                                                            })
                                                  })
                                        } catch (err) {
                                                  console.log(err)
                                                  message.sendMessage('Video yuklab olinmadi.')
                                        }
                              }
                    }
                    else {
                              message.sendMessage(`Assalomu alaykum👋🏻 ${message.from.first_name}\n(𝐀𝐁𝐔𝐂𝐇𝐀𝐌𝐍𝐈𝐊𝐈) Bot ga xush kelibsiz😊\n\nBot xizmatlaridan foydalanish uchun ushbu kanallarga obuna bo’lishingiz shart!⚡️`, subscription)
                    }
          })
}

module.exports = {
          send_photo,
}