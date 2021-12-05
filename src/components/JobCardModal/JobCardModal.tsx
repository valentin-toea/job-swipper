import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
  IonIcon,
  IonCardContent,
} from "@ionic/react";

import { checkmarkCircleOutline } from "ionicons/icons";
import React, { useState } from "react";

const JobModalBody: React.FC<{
  company_name: string;
  job_title: string;
  description: string;
  requirements: {};
  onDismiss: () => void;
}> = ({ company_name, job_title, description, requirements, onDismiss }) => {
  const reqFields: string[][] = Object.entries(requirements);
  const [image, setImage] = useState("");

  React.useEffect(() => {
    switch (company_name) {
      case "Deutsche Bank":
        setImage("https://i.imgur.com/k5Dhhzk.jpeg");
        break;
      case "Google":
        setImage("https://i.ibb.co/6y6c8Ph/Google-office.jpg");
        break;
      case "Snapchat":
        setImage("https://i.ibb.co/n6LQTwd/snapchat.jpg");
        break;
      case "Meta":
        setImage("https://i.ibb.co/GFq4dRx/meta.jpg");
    }
  }, []);

  return (
    <IonCard className="modal-card-wrapper">
      <img src={image} alt="" />
      <IonCardHeader>
        <IonCardTitle>{job_title}</IonCardTitle>
        <IonCardSubtitle>{company_name}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <p>{description}</p>
      </IonCardContent>
      {reqFields.length !== 0 && (
        <IonList className="modal-list">
          <IonListHeader> Requirements </IonListHeader>
          {reqFields.map((obj: string[], index: number) => (
            <IonItem key={index}>
              <IonIcon icon={checkmarkCircleOutline} slot="start" />
              <IonLabel className="ion-text-wrap">
                {obj[0]} - {obj[1]}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      )}
      <IonButton expand="block" onClick={() => onDismiss()}>
        Close
      </IonButton>
    </IonCard>
  );
};
export default JobModalBody;
