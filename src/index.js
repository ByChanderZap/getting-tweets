require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan')
const { GraphQLServer } = require('graphql-yoga')
const typeDefs = require('./graph/typeDefs')
const resolvers = require('./graph/resolvers')


const router = require('./API/routes')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);

//  require('./server/routes/twitter.js')();

require('./rabbit/publisher/index');
const listener = require('./rabbit/suscriber/index');
listener.subscriber()   //We have to start our listener

//  API routes
router(app);

//  Initialazing graphql server
const server = new GraphQLServer({
    resolvers,
    typeDefs
});
server.start({ port: 4001 }, ({port}) => {
    console.log('Server on port ', port, ` http://localhost:${port}`)
})


app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}: http://localhost:${app.get('port')}/`)
});

