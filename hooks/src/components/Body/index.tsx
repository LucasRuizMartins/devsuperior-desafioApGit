import React, { useState } from "react";
import "./styles.css";

type Props = {
  className: string;
  InfoTitle: string;
  inputClass: string;
  onInputChange: (value: string) => void;
};

export default function Body({ className, InfoTitle, inputClass, onInputChange }: Props) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    onInputChange(value); 
  };

  return (
    <>
      <div className={`container mt20 ${className}`}>
        <h1 className="mb20 title" id="info-title">{InfoTitle} </h1>
        <h2 className="schol-name"> DevSuperior - Escola de programação</h2>
        <input
          type="text"
          className={` ${inputClass}`}
          placeholder="Usuario Github"
          value={inputValue} 
          onChange={handleInputChange} 
        />
      </div>
    </>
  );
}
