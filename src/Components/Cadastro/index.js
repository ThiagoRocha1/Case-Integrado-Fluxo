import React from "react";
import "./styles.css";

export default function Cadastro() {
  return (
    <div className="Cadastro">
      <h1>Marque sua consulta aqui!</h1>
      

      <input type={"text"} placeholder={"Nome"} className="input_cadastro" />
      <input type={"email"} placeholder={"Email"} className="input_cadastro" />
      <input type={"text"} placeholder={"CPF"} className="input_cadastro" />
      <input
        type={"text"}
        placeholder={"Data Nascimento (DD/MM/AAAA)"}
        className="input_cadastro"
      />
      <input
        type={"text"}
        placeholder={"Telefone"}
        className="input_cadastro"
      />
      <input
        type={"date"}
        placeholder={"Data Consulta"}
        className="input_cadastro"
      />
      <input type={"time"} placeholder={"Horário"} className="input_cadastro" />

      <button className="botao_cadastro">Submeter</button>
    </div>
  );
}
