function Saudacao({ nome = 'Mundo' }) {
  return <h1>Olá, {nome}!</h1>;
}

export default function App() {
  return (
    <div>
      <Saudacao nome="Marcelo" />
    </div>
  );
}