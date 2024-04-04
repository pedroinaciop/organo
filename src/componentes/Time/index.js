import hexToRgba from "hex-to-rgba";
import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
  return (
    colaboradores.length > 0 && (
      <section
        className="time"
        style={{
          backgroundImage: "url(/images/fundo.png)",
          backgroundColor: hexToRgba(time.cor, "0.4"),
        }}
      >
        <input
          onChange={(evento) => mudarCor(evento.target.value, time.id)}
          value={time.cor}
          type="color"
          className="input-cor"
        />
        <h3>{time.nome}</h3>
        <hr style={{ color: time.cor }} />
        <div className="colaboradores">
          {colaboradores.map((colaborador, indice) => {
            return (
              <Colaborador
                key={indice}
                colaborador={colaborador}
                cor={time.cor}
                aoDeletar={aoDeletar}
                aoFavoritar={aoFavoritar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
