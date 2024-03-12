const social_network = {
          reply_markup: {
                    inline_keyboard: [
                              [{
                                        text: 'Instagram',
                                        url: 'https://www.instagram.com/abuchamniki?igsh=MXE2emgyeHQwdm53aQ%3D%3D&utm_source=qr'
                              },
                              ],
                              [
                                        {
                                                  text: "Telegram",
                                                  url: "https://t.me/+0xEpdnK4--xjMDEy"
                                        },
                              ]
                    ],
          }
}

const subscription = {
          reply_markup: {
                    inline_keyboard: [
                              [
                                        {
                                                  text: "Instagram",
                                                  url: "https://www.instagram.com/abuchamniki?igsh=MXE2emgyeHQwdm53aQ%3D%3D&utm_source=qr"
                                        }
                              ],
                              [
                                        {
                                                  text: `Telegram`,
                                                  url: "https://t.me/+0xEpdnK4--xjMDEy"
                                        }
                              ],
                              [
                                        {
                                                  text: "Azo bo'ldim ✅",
                                                  callback_data: "check_user"
                                        }
                              ]
                    ],
                    remove_keyboard: true,
          }
}

const inline_admin = {
          reply_markup: {
                    inline_keyboard: [
                              [
                                        {
                                                  text: "Admin",
                                                  url: "https://t.me/Abuchamniki"
                                        }
                              ]
                    ]
          }
}

module.exports = {
          social_network,
          subscription,
          inline_admin
}