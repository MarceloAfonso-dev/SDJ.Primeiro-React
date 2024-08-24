function Filho({ children }) {
  return <div className="filho">{ children }</div>
}

export default function App() {
  return <Filho>
    <p>Sou uma tag p passando por children</p>
  </Filho>
}