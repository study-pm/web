const { Bot, InlineKeyboard } = require("grammy");

const bot = new Bot("7756990943:AAH5x7GtXLc0Dfet-drgcrUZ4hdrvcx67k4"); // <-- put your bot token between the "" (https://t.me/BotFather)

// Команда /start
bot.command('start', (ctx) => {
    const keyboard = new InlineKeyboard()
        .text('Опция 1', 'option1')
        .text('Опция 2', 'option2')
        .row()
        .text('Помощь', 'help');

    ctx.reply('Выберите одну из опций:', { reply_markup: keyboard });
});

// Обработка нажатий кнопок
bot.on('callback_query:data', (ctx) => {
    const data = ctx.callbackQuery.data;
    console.log(data);

    if (data === 'option1') {
        ctx.answerCallbackQuery('Вы выбрали Опцию 1!');
        ctx.reply('Это содержание для Опции 1.');
    }
    else if (data === 'option2') {
        ctx.answerCallbackQuery('Вы выбрали Опцию 2!');
        ctx.reply('Это содержание для Опции 2.');
    }
    else if (data === 'help') {
        ctx.answerCallbackQuery('Выберите опцию для получения информации.');
        ctx.reply('Для получения информации выберите любую из опций.');
    }
});

// Запуск  бота
bot.start();
console.log('Бот запущен...');
