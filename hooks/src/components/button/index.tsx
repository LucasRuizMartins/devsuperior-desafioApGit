import React from "react";
import "./styles.css";

type Props = {
  text: string;
  onClick: () => void;
};

export default function Button({ text, onClick }: Props) {
  return (
    <div className="container">
      <div className="btn mt20" onClick={onClick}>{text}</div>
    </div>
  );
}
