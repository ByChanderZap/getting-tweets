const typeDefs = `
    type Query {
        ping(name: String): String
        tweets(tweetsAbout: String): [Tweet]
    }

    type Tweet {
        tweetData: Tdata
        user: User
        matching: Match
    }
    type Tdata {
        tweet_id: String!
        tweet_text: String!
    }
    type User {
        id: String!
        username: String!
        name: String!
    }
    type Match {
        tag: String!
    }
`;


module.exports = typeDefs