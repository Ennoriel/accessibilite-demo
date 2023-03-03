import { useLoaderData } from "react-router-dom";
import "./pokemon.css";

export function Pokemon(props) {
  const pokemons = useLoaderData();

  return (
    <section class="pokemon">
      <h1>Pokemons</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <h2>{pokemon.name}</h2>
            <img
              src={pokemon.image}
              alt={pokemon.name}
              width="160"
              height="160"
            />
            <p>
              {pokemon.name} est un pokemon de type{" "}
              {pokemon.apiTypes.map((type) => type.name).join(", ")}.
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

// 💗 💲 👎
