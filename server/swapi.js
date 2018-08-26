const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    homeworld: "https://swapi.co/api/planets/1/"
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
    homeworld: "https://swapi.co/api/planets/1/"
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
    homeworld: "https://swapi.co/api/planets/8/"
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
    homeworld: "https://swapi.co/api/planets/1/"
  }
];
function getCharacters(args) {
  if (args.homeworld) {
    const homeworld = args.homeworld;
    return characters.filter(character => character.homeworld === homeworld);
  } else {
    return characters;
  }
}
function getCharacter(args) {
  const name = args.name;
  return characters.filter(character => character.name === name)[0];
}
module.exports = {
  characters,
  getCharacter,
  getCharacters
};

//------------------------EXAMPLE 1--------------------------//

/////////////////
//QUERY EXAMPLE//
/////////////////

//query getSingleCharacter($characterName:String!){
// character(name:$characterName){
//     skin_color
//     eye_color
//     homeworld
//   }
// }

///////////////////
//QUERY VARIABLES//
///////////////////
//
//{
//"name": "Luke Skywalker"
// }

//------------------------EXAMPLE 2--------------------------//

/////////////////
//QUERY EXAMPLE//
/////////////////

// query getCharactes($homeworldLoc:String){
//     characters(homeworld:$homeworldLoc){
//       name
//     }
//   }

///////////////////
//QUERY VARIABLES//
///////////////////
// {
//     "homeworldLoc":"https://swapi.co/api/planets/1/"
//   }
