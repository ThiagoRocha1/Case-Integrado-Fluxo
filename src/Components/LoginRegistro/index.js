import React from "react";
import "./styles.css";

export default function LoginRegistro() {
  return (
    <div className="LoginContainer">
      <input type={"text"} placeholder={"Login"} className="input_cadastro" />
      <input
        type={"password"}
        placeholder={"Senha"}
        className="input_cadastro"
      />

      <div className="Registro">
        <button className="Botao_Registro">Entrar</button>
        <button className="Botao_Registro">Cadastrar</button>
      </div>
    </div>
  );
}
