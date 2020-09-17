const rdb = require('../db/index')


const resolvers = {
    Query: {
        ping(root, {name} ) {
            const saludo = `Hola ${name}`
            return saludo
        },

        async tweets(root, { tweetsAbout } ) {
            const query = tweetsAbout || 'tweets';
            const data = await rdb.getTweets(query)
            return data.data
        }
    },
}

module.exports = resolvers