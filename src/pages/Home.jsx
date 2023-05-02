import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
import axios from "axios";

function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var urls = [];
    for (var i = 1; i < 200; i++) {
      urls.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(urls.map((url) => axios.get(url)))
      .then((res) => setPokemons(res));
  };

  return (
    <div className={classes.grid}>
      {pokemons.map((pokemon, key) => {
        return (
          <div key={key} className={classes.pokeCard}>
            <div className={classes.pokeImage}>
              {
                <img
                  src={pokemon.data.sprites.front_default}
                  alt="pokemon imagen"
                />
              }
            </div>
            <li>{pokemon.data.name}</li>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
