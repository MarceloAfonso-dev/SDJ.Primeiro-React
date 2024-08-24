//function Filho({ children }) {
//   return <div className="filho">{ children }</div>
// }

// function Filho({ idade }) {
//  return <p>{idade}</p>
//}
function Imagem({url, alt, descricao}) {
  return (
<div>
  <img src={url} alt={alt}  /> <p>{descricao}</p>
</div>
);
}
function Filho({ approved }) {
  return (
    <>
      {approved ? (
        <Imagem
          url="https://png.pngtree.com/png-clipart/20230810/original/pngtree-happy-emoji-emoticon-showing-double-thumbs-up-like-picture-image_7851906.png"
          alt="feliz"
          descricao="Aprovado"
        />
      ) : (
        <Imagem
          url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNDGyBOFW7PsmFcRicnODeaP6bwT-iXw4mg&s"
          alt="triste"
          descricao="Reprovado"
        />
      )}
    </>
  );
}

export default function App() {
  return <button onClick={() => alert("função funcionando")}>Click Aqui</button>;
}