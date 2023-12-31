import React, { useState } from "react";
import Body from './components/Body';
import Header from './components/Header';
import Button from './components/Button';
import './index.css';
import axios from "axios";
import GitResponse from "./components/GitResponse";

function App() {
  const [bodyClass, setBodyClass] = useState(""); 
  const [gitClass, setGitClass] = useState("git-area"); 
  const [inputClass, setInputClass] = useState("hidden"); 
  const [buttonText, setButtonText] = useState("Começar"); 
  const [buttonClicked, setButtonClicked] = useState(false);
  const [infoTitle, setInfoTitle] = useState("Desafio Github APIb");
  const [gitUser, setGitUser] = useState("");
  const [error, setError] = useState("");  

  const handleInputChange = (value: string) => {
    setGitUser(value); 
  };

  const toggleBodyClass = () => {
    if (!buttonClicked) {
      setBodyClass("search-area");
      setGitClass("git-area");
      setInputClass("git-input");
      setButtonText("Encontrar");
      setButtonClicked(true);
      setInfoTitle("Encontre um perfil Github");
      setGitUser("");
      setError(""); 
    } else {
      axios.get(`https://api.github.com/users/${gitUser}`)
        .then(response => {
          if (response.data.message) {
               setError("Erro ao buscar usuário");
          } else {
            setGitUser(response.data);
            setError(""); 
          }
          console.log(response);
        })
        .catch(error => {
          console.error("Erro ao consultar a API do GitHub:", error);
          setError("Erro ao buscar usuário"); 
        });
    }
  };

  return (
    <>
      <Header />
      <Body
        className={bodyClass}
        InfoTitle={infoTitle}
        inputClass={inputClass}
        onInputChange={handleInputChange} 
      />
      <Button text={buttonText} onClick={toggleBodyClass} />
      {buttonClicked && gitUser && !error && ( 
        <GitResponse
          name={gitUser.name}
          avatar={gitUser.avatar_url}
          user={gitUser.login}
          followers={gitUser.followers}
          location={gitUser.location} 
          className={gitClass}
        />
      )}
      {error && <p className="container error-msg">{error}</p>} 
    </>
  );
}

export default App;
