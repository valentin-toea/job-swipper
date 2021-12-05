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
} from "@ionic/react";

import { schoolOutline, businessOutline } from "ionicons/icons";
import "./RecruitCardModal.css";

const ModalBody: React.FC<{
  person:{  name: string;
  surname: string;
  title: string;
  experience: {};
  education: {};
  }
  onDismiss: () => void;
}> = ({ person, onDismiss }) => {
  const expFields: string[][] = Object.entries(person.experience);
  const eduFields: string[][] = Object.entries(person.education);

  return (
    <IonCard className="modal-card-wrapper">
      <IonCardHeader>
        <IonCardTitle>
          {person.name} {person.surname}
        </IonCardTitle>
        <IonCardSubtitle>{person.title}</IonCardSubtitle>
      </IonCardHeader>
      {expFields.length !== 0 && (
        <IonList className="modal-list">
          <IonListHeader> Experience </IonListHeader>
          {expFields.map((obj: string[], index: number) => (
            <IonItem key={index}>
              <IonIcon icon={businessOutline} slot="start" />
              <IonLabel className="ion-text-wrap">
                {obj[0]} - {obj[1]}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      )}
      {eduFields.length !== 0 && (
        <IonList className="modal-list">
          <IonListHeader> Education </IonListHeader>

          {eduFields.map((obj: string[], index: number) => (
            <IonItem key={index}>
              <IonIcon icon={schoolOutline} slot="start" />
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
export default ModalBody;
