import { useEffect, useState } from 'react';

export default function PokemonAPI() {
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then((res) => res.json())
        .then((data) => {
            setPokemon(data.results)
            setLoading(false)
        })
        .catch((error) => { 
            setError(error.menssage)
            setLoading(false)
        });
    }, []);

    if(loading) {
        return <p>Carregando...</p>
    }

    if(error) {
        return <p>Error: {error}</p>
    }

    return (
        <div>
            <h1>Lista de Pokemons</h1>
            <ul>
                {pokemon.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
}