import React from "react";
import "./styles.css";
import AreaOrganizacao from "../AreaOrganizacao";
import Checklist from "../Checklist";

export default function MainAdmin() {
  return (
    <div className="Main">
      <AreaOrganizacao />
      <Checklist />
    </div>
  );
}
