const amqp = require('amqplib');
const queue = 'tweets';


const publisher = async (tweet) => {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel()
    
    await channel.assertQueue(queue)

    /**
     * @type myMessage should be STRING 
     */
    const newTweet = {
        "tweetData": {
            "tweet_id":tweet.data.id,
            "tweet_text": tweet.data.text
        },
        "user":{
            "Id": tweet.includes.users[0].id,
            "username": "@"+tweet.includes.users[0].username,
            "name": tweet.includes.users[0].name
        },
        "matching": {
            "tag": tweet.matching_rules[0].tag
        }
    }
    const myMessage = JSON.stringify(newTweet);
    
    const sent = await channel.sendToQueue(queue, Buffer.from(
        myMessage
    ))
    if (sent) {
        console.log(`Message sent to ${queue}`)
    } else {
        console.log(`Error sending ${myMessage} to queue: ${queue}`)
    }
}

module.exports = {
    publisher
}