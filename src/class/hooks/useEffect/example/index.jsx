import { useEffect } from "react";

export default function Example() {

    useEffect(() => {
        console.log("UseEffect rodanndo")
        }, []); 

    return (
        <h1>Sou um exemplo de useEffect</h1>
    );
}