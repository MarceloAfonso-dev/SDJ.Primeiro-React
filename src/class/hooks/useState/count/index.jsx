import { useState } from "react";
import "./style.css";

export default function Count() {
    const [count, setCount] = useState(0);

    // Tradicional
    function handleCount() {
        setCount(count + 1);
    }

    return (
        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>Clique Aqui</button>
            <button onClick={() => setCount(count - 1)}>Não Clique Aqui</button>
        </div>
    )
}