const telegraf = require("telegraf")
const dotenv = require("dotenv")

// functions
const { isChatMember } = require("./controller/getChatMember")
const { startComamnd } = require("./function/start_command")
const { main_menu } = require("./keyboard/keyboard")
const { check_user } = require("./function/check_user")
const { send_photo } = require("./function/sendMessage")
dotenv.config()

const TELEGRAM_BASE_URL = `https://api.telegram.org/bot${process.env.TOKEN}`
const bot = new telegraf.Telegraf(process.env.TOKEN)

bot.command("start", startComamnd)

bot.action("check_user", check_user)

bot.on("message", send_photo)

bot.launch()