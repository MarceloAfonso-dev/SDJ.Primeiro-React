import { useEffect } from 'react';
import { useState } from 'react';

export default function PokemonAPI() {
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        .then((res) => console.log(res.json()))
        .then((data) => console.log(data) ,"data")
        .catch((error) =>  console.log(error), "error" );
    }, []);

    return (
        <h1>em construção...</h1>
    );
}