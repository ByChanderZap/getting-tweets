const redb = require('../db/index');

const getTweets = (tweetsAbout) => {
    if (tweetsAbout) {
        const finalData = redb.getTweets(tweetsAbout);
    }   else {
        const finalData = redb.getTweets('tweets');
    }
    return finalData;
}

module.exports = {
    getTweets
}