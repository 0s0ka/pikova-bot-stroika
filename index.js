import { config } from "dotenv";
import express from "express";
import TelegramBot from "node-telegram-bot-api";

config();
const app = express();

const bot = new TelegramBot(process.env.API_KEY_BOT, {
  polling: true,
});

//Обработчик события присоединения нового участника
bot.on("new_chat_members", async (msg) => {
  try {
    for (const user of msg.new_chat_members) {
      //Выбор имени для подстановки
      const userName = user.first_name || user.username || "Дизайнер";
      //Приветственное сообщение
      const welcomeMessage = await bot.sendMessage(
        msg.chat.id,
        `Добро пожаловать, ${userName} 👋🏻!\nПожалуйста, начни изучение чата с закрепленных сообщений👆🏼\nЕсли у тебя есть вопрос❓ воспользуйся поиском 🔍 Возможно, ответ уже есть в чате.\nЕсли ответ найти не удалось, не стесняйся спрашивать и обязательно отмечай @luv_osoka.`
      );

      setTimeout(() => {
        bot
          .deleteMessage(msg.chat.id, welcomeMessage.message_id)
          .catch((error) => console.log("Ошибка удаления сообщения:", error));
      }, 60000);
    }
  } catch (error) {
    console.log("Ошибка:", error);
  }
});
