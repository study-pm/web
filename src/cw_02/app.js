const { Bot } = require("grammy");

const bot = new Bot("7682643313:AAEM_Pd6TYZFXFOPo65ZFfYbLopKF84EoK0"); // <-- put your bot token between the "" (https://t.me/BotFather)

// Reply to any message with "Hi there!".
// bot.on("message", (ctx) => ctx.reply("Hi there!"));
// bot.command("up",  (ctx) => ctx.reply("Up command"))

let states = {
    menu: 'menu',
    number: 'number'
}

let state = states.menu;
let randNumber = 0;

bot.command('number', (ctx) => {
    state = states.number;
    randNumber = Math.floor(Math.random() * (20 - 1) + 1);
    console.log(randNumber);
    ctx.reply('Я загадал число от 1 до 20, попробуй угадать!');
})

bot.on('message', (ctx) => {
    let text = ctx.message.text;

    if (state == states.number) {
        if (text == randNumber) ctx.reply('Угадал!')
        else if (text < randNumber) ctx.reply('Больше')
        else ctx.reply('Меньше')
    }
})

bot.start();
