import React from "react";
import "./Card.css";

interface Props {
  info: number;
  onClick: () => void;
}

const Card: React.FC<Props> = (props: Props) => {
  return (
    <div className="cardContainer">
      <div className="card" onClick={props.onClick}>
        <h3 style={{ padding: 20 }}>{props.info}</h3>
      </div>
    </div>
  );
};

export default Card;
