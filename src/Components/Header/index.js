import React from "react";
import "./styles.css";
import ar_condicionado from "../../Assets/ar-condicionado.png";
import energia_limpa from "../../Assets/energia-limpa.png";
import HeaderDiv from "../HeaderDiv";

function Header() {
  return (
    <div className="Head">
      <div>Logo</div>
      <HeaderDiv title="Ambiente Climatizado" image={ar_condicionado} />
      <HeaderDiv title="Energia Limpa" image={energia_limpa} />
    </div>
  );
}

export default Header;
