//function Filho({ children }) {
//   return <div className="filho">{ children }</div>
// }

function Filho({ idade }) {
  return <p>{idade}</p>
}

export default function App() {
  return <Filho idade={20} />
}