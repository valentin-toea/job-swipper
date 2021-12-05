import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonText,
  IonTitle,
} from "@ionic/react";
import React, { useState } from "react";

interface Props {
  info: any;
  onClick: () => void;
}

const CardWithJob: React.FC<Props> = ({ info, onClick }: Props) => {
  const [image, setImage] = useState("");

  React.useEffect(() => {
    if (info) {
      switch (info.company_name) {
        case "deutschebank":
          setImage("https://i.imgur.com/k5Dhhzk.jpeg");
          break;
        case "google":
          setImage("https://i.ibb.co/6y6c8Ph/Google-office.jpg");
          break;
        case "snapchat":
          setImage("https://i.ibb.co/n6LQTwd/snapchat.jpg");
          break;
        case "facebook":
          setImage("https://i.ibb.co/GFq4dRx/meta.jpg");
          break;
      }
    }
  }, [info]);
  return (
    <div className="cardContainer" onClick={onClick}>
      {info ? (
        <IonCard className="card">
          <img src={image} className="card-img" />
          <IonCardHeader>
            <IonCardSubtitle>{info.company_name}</IonCardSubtitle>
            <IonCardTitle>{info.job_title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>{info.description}</IonText>
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

export default CardWithJob;
