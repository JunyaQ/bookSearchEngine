const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const {ApolloServer} = require("apollo-server-express");
const {typeDefs,resolvers} = require('./Schemas');
const { authMiddleware } = require("./utils/auth");

const app = express();
const PORT = process.env.PORT || 3001;
// add apollo server and schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
})
// add apollo server and exprress as middleware
server.applyMiddleware({ app });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

//app.use(routes);
// add routes
// serve up react front-end in production
// app.get('*',(req,res)=>{
//   res.sendFile(path.join(__dirname,"../client/build/index.html"));
// })

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
db.on("error", (err) => {
  console.error("MongoDB connection error: ", err);
});