export default function hello_world(client) {

    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });
      
    client.on('message', msg => {
        if (msg.content === 'ping') {
            msg.reply('Pong!');
        }
    });

}