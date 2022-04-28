import "./PaletaListaItem.css";

function PaletaListaItem({ paleta, quantidadeSelecionada, index }) {
  const removerItem = (i) => console.log("remover" + i);
  const adicionarItem = (i) => console.log("adicionar" + i);

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={() => removerItem(index)}>
        {" "}
        remover{" "}
      </button>
    );

  const badgeCounter = (canRender) =>
    Boolean(canRender) && (
      <span className="PaletaListaItem__badge"> {quantidadeSelecionada} </span>
    );

  return (
    <div className="PaletaListaItem">
      {badgeCounter(quantidadeSelecionada, index)}
      <div>
        <div className="PaletaListaItem__titulo"> {paleta.titulo} </div>
        <div className="PaletaListaItem__preco">
          R$ {paleta.preco.toFixed(2)}
        </div>
        <div className="PaletaListaItem__descricao"> {paleta.descricao} </div>
        <div className="PaletaListaItem__acoes Acoes">
          <button
            className={`Acoes__adicionar ${
              !quantidadeSelecionada && "Acoes__adicionar--preencher"
            }`}
            onClick={() => adicionarItem(index)}
          >
            adicionar
          </button>
          {removeButton(quantidadeSelecionada, index)}
        </div>
      </div>
      <img
        className="PaletaListaItem__foto"
        src={paleta.foto}
        alt={`Paleta de ${paleta.sabor}`}
      />
    </div>
  );
}

export default PaletaListaItem;