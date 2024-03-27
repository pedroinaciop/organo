import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import { useState } from "react";
import "./App.css";

function App() {

  const [colaboradores, setColaborador] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaborador([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={(colaborador) => aoNovoColaboradorAdicionado(colaborador)}
      />
    </div>
  );
}

export default App;
