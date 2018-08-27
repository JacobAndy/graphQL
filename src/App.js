import React, { Component } from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider, Query } from "react-apollo";

const client = new ApolloClient({ uri: "http://localhost:3001/graphql" });

class App extends Component {
  render() {
    return (
      <Query
        query={gql`
          {
            characters(homeworld: "https://swapi.co/api/planets/1/") {
              name
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          else if (error) return <p>Error:(</p>;
          else {
            let { characters } = data;
            return characters.map(character => (
              <h1 key={character.name}>{character.name}</h1>
            ));
          }
        }}
      </Query>
    );
  }
}
const newApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default newApp;
