import React from "react";
import "./styles.css";

type Props = {
  name: string;
  avatar: string;
  user: string;
  followers: string;
  location: string;
  className: string;
};

export default function GitResponse({ className, name, avatar, user, followers, location }: Props) {
  return (
    <>
      <div className={`container ${className}`} >
        <div><img src={avatar} alt="" /></div>

        <div className="git-card">
          <h2 className="git-info">  Informações</h2>
          <div className="line"> <span>Perfil :</span> https://api.github.com/users/{user}</div>
          <div className="line"> <span>Seguidores :</span>  {followers}</div>
          <div className="line"> <span>Localidade :</span>  {location}</div>
          <div className="line"> <span>Nome :</span>  {name}</div>
        </div>
      </div>
    </>
  );
}
