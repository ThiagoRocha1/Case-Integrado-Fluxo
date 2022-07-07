import React from "react";
import AreaOrganizacao from "../AreaOrganizacao";
import LoginRegistro from "../LoginRegistro";
import "./styles.css";

export default function MainLogin() {
  return (
    <div className="Main">
      <AreaOrganizacao />
      <LoginRegistro />
    </div>
  );
}
