import React from "react";
import Cadastro from "../Cadastro";
import "./styles.css";
import AreaOrganizacao from "../AreaOrganizacao";

export default function Main() {
  return (
    <div className="Main">
      <AreaOrganizacao />
      <Cadastro />
    </div>
  );
}
