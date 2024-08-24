function Filho({title, description, url}) {
  return( 
  <div>
    <p>{title}</p>
    <p>{description}</p>
    <img src={url} alt="placeholder" />
  </div>
  );
}

export default function App() {
  return(
    <Filho
      title="Titulo do filho" 
      description="descrição do filho"
      url="https://via.placeholder.com/150"
    />
  )
}