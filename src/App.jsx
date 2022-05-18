import React, { useEffect, useReducer } from "react";
import PokemonContext from "./PokemonContext";
const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      }
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload
      }
    case 'SET_SELECTED_POKEMON':
      return {
        ...state,
        selectedPokemon: action.payload
      }
    default:
      state
  }
}
import PokemonTable from "./components/PokemonTable";
import PokemonFilter from "./components/PokemonFilter";
import PokemonInfo from "./components/PokemonInfo";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(pokemonReducer, { data: [], filter: "", selectedPokemon: null })

  useEffect(() => {
    // para el build: https://reactheadless.000webhostapp.com/pokemon.json
    fetch('http://localhost:3000/pokemon.json')
      .then(res => res.json())
      .then(data => dispatch({
        type: 'SET_DATA',
        payload: data,
      }))
  }, [])
  if (!state.data) {
    return <div>Fetching Pokemons...</div>;
  }
  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      <div style={{ margin: 'auto', display: "flex", flexDirection: "column", width: '60vw' }}>
        <h1>Pokemon Search</h1>
        <PokemonFilter />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 1fr",
            marginTop: '2em',
            gap: "1.5rem",
          }}
        >
          <PokemonTable />
          <PokemonInfo />
        </div>
      </div >
    </PokemonContext.Provider >
  );
}
export default App;