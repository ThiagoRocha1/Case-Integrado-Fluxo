import React from "react";
import { useState } from "react";
import "./styles.css";

function Checklist() {
  var [contador, setContador] = useState(6);

  function diminuir() {
    if (contador === 0) {
      setContador((contador = 0));
    } else {
      setContador(contador - 1);
    }
  }

  function resetar() {
    setContador((contador = 6));
  }

  function desmarcar() {
    if (contador === 6) {
      setContador((contador = 6));
    } else {
      setContador(contador + 1);
    }
  }

  return (
    <div className="lista-todo">

      <button className="botao_reset" onClick={resetar}>Reset</button>

      <h1 className="Title">Tarefas restantes: {contador}</h1>

      <div className="componente-todo">
        <input className="checkbox" type={"checkbox"} />
        <button className="botao_checklist" onClick={diminuir}>Check</button>
        <button className="botao_checklist" onClick={desmarcar}>Desfazer</button>
        <div>Consulta Iniciada</div>
      </div>

      <div className="componente-todo">
        <input className="checkbox" type={"checkbox"} />
        <button className="botao_checklist" onClick={diminuir}>Check</button>
        <button className="botao_checklist" onClick={desmarcar}>Desfazer</button>
        <div>Avaliaçao Realizada</div>
      </div>

      <div className="componente-todo">
        <input className="checkbox" type={"checkbox"} />
        <button className="botao_checklist" onClick={diminuir}>Check</button>
        <button className="botao_checklist" onClick={desmarcar}>Desfazer</button>
        <div>Plano Alimentar Feito</div>
      </div>
      
      <div className="componente-todo">
        <input className="checkbox" type={"checkbox"} />
        <button className="botao_checklist" onClick={diminuir}>Check</button>
        <button className="botao_checklist" onClick={desmarcar}>Desfazer</button>
        <div>Conta Gerada App</div>
      </div>

      <div className="componente-todo">
        <input className="checkbox" type={"checkbox"} />
        <button className="botao_checklist" onClick={diminuir}>Check</button>
        <button className="botao_checklist" onClick={desmarcar}>Desfazer</button>
        <div>Plano Alimentar Entregue</div>
      </div>

      <div className="componente-todo">
        <input className="checkbox" type={"checkbox"} />
        <button className="botao_checklist" onClick={diminuir}>Check</button>
        <button className="botao_checklist" onClick={desmarcar}>Desfazer</button>
        <div>Consulta Finalizada</div>
      </div>

    </div>
  );
}

export default Checklist;
