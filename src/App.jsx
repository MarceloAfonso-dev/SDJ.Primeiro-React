function Filho({ onAlert }) {
  return <button onClick={onAlert}>Receba seu alert</button>;
}

export default function App() {
  const handleAlert = () => alert('Alerta funcionando!');
  return <Filho onAlert={handleAlert} />;
}