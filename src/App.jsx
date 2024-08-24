//function Filho({ children }) {
//   return <div className="filho">{ children }</div>
// }

// function Filho({ idade }) {
//  return <p>{idade}</p>
//}

function Filho({ approved }) {
  return(
  <>
    {approved ? <p>aprovado</p> : <p>reprovado</p>}
  </>)
  }

export default function App() {
  return <Filho approved />
}