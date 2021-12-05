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
  job: {
    company_name: string;
    job_title: string;
    description: string;
    requirements: string;
  };
  onDismiss: () => void;
}> = ({ job, onDismiss }) => {

  const [image, setImage] = useState("");
  const [reqFLD, setReqFLD] = useState<any>();

  React.useEffect(() => {
    switch (job.company_name) {
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
    setReqFLD(job?.requirements?.split(','));

  }, [job]);

  return (
    <IonCard className="modal-card-wrapper">
      <img src={image} alt="" />
      <IonCardHeader>
        <IonCardTitle>{job.job_title}</IonCardTitle>
        <IonCardSubtitle>{job.company_name}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <p>{job.description}</p>
      </IonCardContent>
      { (!!reqFLD&&reqFLD.length !== 0) && (
        <IonList className="modal-list">
          <IonListHeader> Requirements </IonListHeader>
          {reqFLD.map((obj: string, index: number) => (
            <IonItem key={index}>
              <IonIcon icon={checkmarkCircleOutline} slot="start" />
              <IonLabel className="ion-text-wrap">
                {obj}
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
