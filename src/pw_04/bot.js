const { Bot, InlineKeyboard } = require("grammy");

const bot = new Bot("7327156736:AAHxq483GzXX_UPYLGM0bwTbp_98FsG0Fjs"); // <-- put your bot token between the "" (https://t.me/BotFather)

const handleHelp = async(ctx) => {
    ctx.reply('Нажмите кнопку с выбором ставки (Орел или Решка), после чего компьютер подбросит монетку и сообщит вам результат\nДоступные команды:\n/start - Приветствие\n/play - Новая игра\n/help - Информация о командах\n/stop - Завершить игру');
}
const handlePlay = async(ctx) => {
    console.log(ctx);
    const keyboard = new InlineKeyboard()
    .text('Орел', 'head')
    .text('Решка', 'tail')
    .row()
    .text('Помощь', 'help')
    ;

    await ctx.reply('Выберите ставку:', { reply_markup: keyboard });
}

// Команда /start
bot.command('start', ctx => {
    ctx.reply('Добро пожаловать в игру "Орел и Решка"!\nЧтобы начать игру, используйте команду /play.');
});

bot.command('play', (ctx) => {
    handlePlay(ctx);
});

bot.command("help", handleHelp);

// Обработка нажатий кнопок
bot.on('callback_query:data', async(ctx) => {
    const data = ctx.callbackQuery.data;
    console.log(data);

    switch(data) {
        case 'head': case 'tail':
            const res = Math.random() < 0.5 ? 'head' : 'tail';
            const result = res === 'head' ? ' Орел' : 'Решка';
            const resMsg = 'Выпал' + (res === 'head' ? ' орел' : 'а решка');
            const msg = `${data === res ? "Поздравляю! Вы" : "Не"} угадали`;
            const message = resMsg + '. ' + msg;

            await ctx.answerCallbackQuery(result);
            await ctx.reply(message);

            const keyboard = new InlineKeyboard()
                .text('Да', 'y')
                .text('Нет', 'n')
            ;
            await ctx.reply('Хотите сыграть еще раз?', { reply_markup: keyboard });
            break;
        case 'y':
            await ctx.answerCallbackQuery('Играем снова');
            await handlePlay(ctx);
            break;
        case 'n':
            await ctx.answerCallbackQuery('Завершение');
            await ctx.reply("Спасибо за игру. До скорых встреч!");
            bot.stop();
            break;
        default:
            await ctx.answerCallbackQuery('Помощь');
            await handleHelp(ctx);
            break;
    }
});

// Запуск  бота
bot.start();
console.log('Bot started...');
