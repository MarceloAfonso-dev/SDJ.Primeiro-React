import { useEffect } from 'react';

export default function PokemonAPI() {

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then((res) => console.log(res.json()),"res")
        .then((data) => console.log(data) ,"data")
        .catch((error) =>  console.log(error) );
    }, []);

    return (
        <h1>em construção...</h1>
    );
}