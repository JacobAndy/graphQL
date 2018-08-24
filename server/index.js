const express = require("express"),
  app = express(),
  graphqlHTTP = require("express-graphql"),
  { buildSchema } = require("graphql"),
  root = {
    hello: () => {
      return "Hello World!";
    }
  };
(PORT = process.env.PORT || 3001),
  (cors = require("cors")),
  (schema = buildSchema(`
    type Query{
    hello:String
    }
    `));

app.use(express.json());
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
