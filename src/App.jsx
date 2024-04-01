import "./App.css";
import CardTrilha from "./components/CardTrilha";

function App() {
  const listaTrilhas = [
    {
      nomeTrilha: "Trilha da costa da Lagoa",
      cidade: "Florianópolis",
      estado: "SC",
      duracao: 120,
      trajeto: 4,
      dificuldade: "iniciante",
      tipo: "caminhada/trekking",
      nomeUsuario: "Guilherme André",
      urlImagem:
        "https://images.pexels.com/photos/5036668/pexels-photo-5036668.jpeg?auto=compress&cs=tinysrgb&w=600",
        // urlImagem: "./assets/imagem-trilha.jpg"
    },
  ];

  return (
    <>
    {
      listaTrilhas.map((trilha, index)=>(

        <CardTrilha dadosTrilha = {trilha} key={index} />
      ))
    }
    </>
  );
}

export default App;
