const redb = require('../db/index');

const getTweets = (tweetsAbout) => {
    if (tweetsAbout) {
        const finalData = redb.getTweets(tweetsAbout);
        return finalData;
    } else {
        const finalData = redb.getTweets('tweets');
        return finalData;
    }

}

module.exports = {
    getTweets
}