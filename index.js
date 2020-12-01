const Bunyan = require('bunyan');
const Discord = require('discord.js');

const { TOKEN, DEBUG_CHANNEL_ID } = process.env;

const logger = Bunyan.createLogger({
    name: 'secret-santa-bot',
    level: 'debug'
});

async function updateUser() {}
async function getRemainingUsers() {}

exports.handler = async () => {
    const discord = new Discord.Client();

    discord.login(TOKEN);

    await new Promise(resolve => {
        discord.on('ready', async () => {
            logger.info('Logged in');

            const channel = await discord.channels.fetch(DEBUG_CHANNEL_ID);
            const msg = await channel.send('test');

            logger.info(msg, 'Sent message');

            discord.destroy();
            resolve();
        })
    })
}
