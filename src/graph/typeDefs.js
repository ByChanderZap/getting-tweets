const typeDefs = `
    type Query {
        ping(name: String): String
        tweet(tweetsAbout: String): [Tweet]
    }

    type Tweet {
        tweetData: {
            tweet_id: String!
            tweet_text: String!
        }
        user: {
            id: String!
            username: String!
            name: String!
        }
        matching: {
            tag: String!
        }
    }
`;


module.exports = typeDefs