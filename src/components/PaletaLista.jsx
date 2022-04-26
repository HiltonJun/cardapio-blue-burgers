import "./PaletaLista.css";
import { paletas } from "../mocks/paletas.js";

function PaletaLista() {
  return (
    <div className="PaletaLista">
      <div className="PaletaListaItem">
        <div>
          <div className="PaletaListaItem__titulo">
            {" "}
            Doce de Leite com Doce de Leite{" "}
          </div>
          <div className="PaletaListaItem__preco">R$ 10,00</div>
          <div className="PaletaListaItem__descricao">
            {" "}
            Quam vulputate dignissim suspendisse in est ante in nibh mauris.{" "}
          </div>
          <div className="PaletaListaItem__acoes Acoes">
            <button className="Acoes__adicionar Acoes__adicionar--preencher">
              adicionar
            </button>
          </div>
        </div>
        <img
          className="PaletaListaItem__foto"
          src={require("../assets/images/doce-de-leite-com-doce-de-leite.png")}
          alt="Paleta de Doce de Leite"
        />
      </div>
    </div>
  );
}

export default PaletaLista;
