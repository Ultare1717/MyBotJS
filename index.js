const SlackBot = require('slackbots');
const axios = require('axios');
const bot = new SlackBot(
    {
        token: 'xoxb-2333589846192-2310107633043-j3PDeTEZ78ui5zfUK8nKOMAE',
        name: 'MyBotJS'
    }
);

// Start Handler
bot.on('start', () => {
    const params = {
      icon_emoji: ':smiley:'
    };
  
    bot.postMessageToChannel(
      'general',
      'Get Ready To Laugh With @MyBotJS!',
      params
    );
  });