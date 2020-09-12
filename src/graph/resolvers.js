const resolvers = {
    Query: {
        ping(root, {name} ) {
            const saludo = `Hola ${name}`
            return saludo
        }
    },
    tweet(root, {tweetsAbout}) {
        return `tweets about ${tweetsAbout}`
    }
}

module.exports = resolvers