const resolvers = {
    Query: {
        ping(root, {name} ) {
            const saludo = `Hola ${name}`
            return saludo
        }
    },
    Tweet() {
        
    }
}

module.exports = resolvers