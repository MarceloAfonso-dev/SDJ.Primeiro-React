function Filho({ onAlert }) {
  return <button onClick={onAlert}>Receba seu alert</button>;
}

export default function App() {
  return Filho({ onAlert: () => alert('Alerta funcionando!') });
}