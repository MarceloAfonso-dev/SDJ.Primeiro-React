import './style.css'
import Box from "../../assets/images/Relume.svg"

export default function Card({title, description}) {
    return( 
        <div className='card-container'>
            <img src={Box} alt="imagem de um card" />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}