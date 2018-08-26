const express = require("express"),
  app = express(),
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
  //////////////////
  //GraphQL Schema//
  //////////////////
  schema = buildSchema(`
    type Query{
    character(name:String!):Character
    characters(homeworld:String):[Character]
    }
    type Mutation{
      updateCharacter(name:String!,height:Int!):Character
    }
    type Character{
      name:String
      height:String
      mass: String
      hair_color:String
      eye_color:String
      skin_color:String
      birth_year:String
      gender:String
      homeworld:String
    }
    `);

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
