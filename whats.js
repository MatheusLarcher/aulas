//npm init -y
//npm install @open-wa/wa-automate



const { create, Client } = require('@open-wa/wa-automate');

function start(client) {
  client.onMessage(async message => {
    if (message.body === 'Oi') {
      await client.sendText(message.from, 'Olá! Como posso ajudá-lo hoje?');
    }
  });
}

create().then(client => start(client));
