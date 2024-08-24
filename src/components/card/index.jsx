import './style.css'

export default function Card({title, description, image}) {
    return( 
        <div className='card'>
            <p className='titulo'>{title}</p>
            <img src={image} alt="imageAlt" />
            <p className='descricao'>{description}</p>
            <div className='barra'></div>
        </div>
    );
}