const express = require("express"),
  app = express(),
  fs = require("fs"),
  path = require("path"),
  graphqlHTTP = require("express-graphql"),
  { buildSchema } = require("graphql"),
  //////////////
  //DUMMY DATA//
  //////////////
  { getCharacter, getCharacters, updateCharacter } = require("./swapi"),
  /////////////////
  //Root Resolver//
  /////////////////
  root = {
    character: getCharacter,
    characters: getCharacters,
    updateCharacter
  },
  PORT = process.env.PORT || 3001,
  cors = require("cors"),
  filePath = path.join(__dirname, "project.gql"),
  typeDefs = fs.readFileSync(filePath, "utf-8"),
  //////////////////
  //GraphQL Schema//
  //////////////////
  schema = buildSchema(typeDefs);

app.use(express.json());
app.use(cors());
///////////////////////
// GraphQL Middleware//
///////////////////////
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
