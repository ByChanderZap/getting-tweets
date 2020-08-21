const amqp = require('amqplib');
const myRedisDb = require('../../db/index.js');
const queue = 'tweets';

const subscriber = async () => {

    console.log('Listening Connected');

    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel()
    await channel.assertQueue(queue)

    channel.consume(queue, async (message) => {
        const messageOnString = message.content.toString();
        const content = JSON.parse(messageOnString);

        console.log(`Recived message from ${queue}`);

        //  Im trying to set a new tweet
        myRedisDb.addTweets(content.matching.tag, messageOnString);
        channel.ack(message)
    });

}

module.exports = {
    subscriber
}