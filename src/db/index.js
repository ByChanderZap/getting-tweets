const Redis = require('ioredis');
const redis = new Redis();
const addTweets = async (key, tweet) => {
    try {
        const result = await redis.rpush(key, tweet);
        const all = await redis.rpush('tweets', tweet);
        console.log(`Tweet saved: ${tweet}`)
    } catch (error) {
        console.error(error);
    }
}

const getTweets = async (key) => {
    try {
        const data = await redis.lrange(key, 0, 50);
        //data.forEach(twt => console.log(twt));
        //console.log(data)

        const newData = JSON.parse(data.length);

        let finalData = {
            "data": []
        }
        data.forEach(element => {
            finalData.data.push(JSON.parse(element))
        });
        return finalData;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    addTweets,
    getTweets,   
}