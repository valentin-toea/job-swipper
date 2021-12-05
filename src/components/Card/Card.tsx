import React from "react";
import "./Card.css";
import { useSelector, useDispatch } from "react-redux";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

interface Props {
  info: number;
  picture: string;
  onClick: () => void;
}

const Card: React.FC<Props> = (props: Props) => {
  return (
    <div className="cardContainer" onClick={props.onClick}>
      <IonCard className="card">
        <img src={props.picture} className="card-img" />
        <IonCardHeader>
          <IonCardSubtitle>Frontend Developer</IonCardSubtitle>
          <IonCardTitle>Madison, WI</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          Skills in C# , C++
          <br />
          <b>*Press to see more</b>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default Card;
