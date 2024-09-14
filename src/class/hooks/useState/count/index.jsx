import { useState } from "react";

export default function Count() {
    const [count, setCount] = useState(0);

    // Tradicional
    function handleCount() {
        setCount(count + 1);
    }

    return (
        <div>
            <p>Você clicou {count} vezes</p>
            // Arrow Function de preguiçoso
            <button onClick={() => setCount(count + 1)}>Click Aqui</button>
        </div>
    )
}