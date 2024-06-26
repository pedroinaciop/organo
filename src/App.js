import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data-Science",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: "Pedro Inácio P.",
      cargo: "Desenvolvedor",
      imagem: "https://github.com/pedroinaciop.png",
      time: times[0].nome,
    },
  ];

  const [colaboradores, setColaborador] = useState(inicial);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaborador([...colaboradores, colaborador]);
  };

  function deletarColaborador(id) {
    setColaborador(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function resolverFavorito(id) {
    setColaborador(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador;
      }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario cadastrarTime={cadastrarTime} times={times.map((time) => time.nome)} aoCadastrar={(colaborador) => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map((time, indice) => (
        <Time aoFavoritar={resolverFavorito} mudarCor={mudarCorDoTime} key={indice} time={time} nome={time.nome} aoDeletar={deletarColaborador}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}/>
      ))}
      <Rodape />
    </div>
  );
}

export default App;