import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
    const coresDeFundo = { backgroundColor: props.corSecundaria };
    const coresDaBorda = { borderColor: props.corPrimaria };

  return (
    (props.colaboradores.length > 0) ? <section style={coresDeFundo} className="time" >
      <h3 style={ coresDaBorda }>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
      </div>
    </section>
    : ''
  );
};

export default Time;