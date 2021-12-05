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
  IonTitle,
} from "@ionic/react";
import { info } from "console";

interface Props {
  info: any;
  picture: string;
  onClick: () => void;
}

const Card: React.FC<Props> = ({ info, picture, onClick }) => {
  return (
    <div className="cardContainer" onClick={onClick}>
      {info ? (
        <IonCard className="card">
          <img src={picture} className="card-img" />
          <IonCardHeader>
            <IonCardSubtitle>{info.title}</IonCardSubtitle>
            <IonCardTitle>{info.name + ", " + info.surname}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Skills in C# , C++
            <br />
            <b>*Press to see more</b>
          </IonCardContent>
        </IonCard>
      ) : (
        <IonCard className="end-card">
          <IonTitle>That's all.</IonTitle>
        </IonCard>
      )}
    </div>
  );
};

export default Card;
