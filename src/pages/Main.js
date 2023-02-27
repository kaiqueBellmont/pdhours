import * as React from "react";
import "./App.css";
import emoji from "../../public/assets/emoji.svg";
import rectangle from "../../public/assets/rectangle.svg";
import union from "../../public/assets/union.svg";
import rectangle1 from "../../public/assets/rectangle1.svg";

import Button from "../components";
import CardFrame from "../components/CardFrame";


export default function Main(){
  const propsData = {
    button1: {
      primary: "Lançar horas",
    },
    frame1: {
      button: {
        primary: "Criar squad",
      },
      emoji: emoji,
      nenhumaSquadCadast:
        "Nenhuma squad cadastrada. Crie uma squad para come\xe7ar.",
    },
  };
  return (
    <div className="squads-empty">
      <div className="flex-container">
        <img className="union" src={union} />
        <span className="interface-para-lanam">
          Interface para lançamento de horas
        </span>
      </div>
      <div className="flex-container-1">
        <span className="pd-hours">PD Hours</span>
        <Button className="button-1-instance-1" {...propsData.button1} />
      </div>
      <div className="flex-container-2">
        <span className="squads">Squads</span>
        <span>Usuários</span>
      </div>
      <img className="rectangle-51" src={rectangle1} />
      <div className="rectangle-5">
        <img className="rectangle-3" src={rectangle} />
        <CardFrame className="frame-1-instance-1" {...propsData.frame1} />
      </div>
    </div>
  );
};
