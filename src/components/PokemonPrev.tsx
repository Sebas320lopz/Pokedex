import { useEffect, useState } from "react";
import { fetchPokemonPrev, type PockemonPrevProps } from "../models/PockemonPrev";
import "../styles/PockemonPrev.css";


export function PockemonPrev() {
  const [pokemonData, setPokemonData] = useState<PockemonPrevProps[]>([]);

  useEffect(() => {
    async function loadPokemon() {
      const data = await fetchPokemonPrev();
      setPokemonData(data);
    }
    loadPokemon();
  }, []); 

  return (
    <div className="pokemon-grid">
      {pokemonData.length > 0 ? (
        pokemonData.map((pokemon) => (
          <div className="pokemon-card" key={pokemon.id}>
            <h2>{pokemon.pokemon}</h2>
            <img src={pokemon.image} alt={pokemon.pokemon} />
            <p>ID: {pokemon.id}</p>
            <a href={pokemon.url}>More Info</a>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
