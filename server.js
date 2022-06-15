const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./src/db');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/graphql/schema');

dotenv.config()

const app = express();

connectDB();

app.listen(process.env.PORT, ()=>{
    console.log(`This runs on port ${process.env.PORT}`)
});

app.use('/graphql', graphqlHTTP({schema, graphiql: true}))


app.get('/', (req, res) => {
    console.log('GET request @  received');
    res.send('indeedio');
});