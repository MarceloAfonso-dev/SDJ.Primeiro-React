import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import './style.css';

export default function Accordion() {

    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="accordion-container">
            <div className="accordion-title">
                <p>Novidades</p>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                >{isOpen ? <ArrowUp /> : <ArrowDown />}</button>
            </div>
            {isOpen && (
                <div className="accordion-content">
                    <p>Parágrafo qualquer</p>
                </div>
            ) }
        </div>
    )
}