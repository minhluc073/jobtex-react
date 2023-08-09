import React from "react";
import { bindNiceSelect } from "./NiceSelectUtil";
import "./NiceSelect.css";

export default function NiceSelect({ id, children, ...otherProps }) {
  React.useEffect(() => {
    const el = document.getElementById(id);
    bindNiceSelect(el);
  }, [id]);

  return (
    <select id={id} {...otherProps}>
      {children}
    </select>
  );
}
