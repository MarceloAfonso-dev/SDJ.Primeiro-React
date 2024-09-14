import { useEffect, useState } from "react";

export default function CountEffect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("UseEffect ativado pela depedência count")
    }, [count]); // O useEffect é chamado toda vez que o count é alterado

    // Tradicional
    function handleCount() {
        setCount(count + 1);
    }

    return (
        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>Click Aqui</button>
        </div>
    )
}