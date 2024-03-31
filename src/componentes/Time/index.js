import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  const coresDeFundo = { backgroundColor: props.corSecundaria };
  const coresDaBorda = { borderColor: props.corPrimaria };

  return (
    props.colaboradores.length > 0 && (
      <section style={coresDeFundo} className="time">
        <h3 style={coresDaBorda}>{props.nome}</h3>
        <hr style={coresDaBorda} />
        <div className="colaboradores">
          {props.colaboradores.map((colaborador, indice) => {
            return (
              <Colaborador
                corDeFundo={props.corPrimaria}
                corDoDeletar={props.corSecundaria}
                key={indice}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                aoDeletar={props.aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
