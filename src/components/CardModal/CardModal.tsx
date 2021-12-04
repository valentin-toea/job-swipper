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
import "./CardModal.css";

const ModalBody: React.FC<{
  name: string;
  surname: string;
  title: string;
  experience: {};
  education: {};
  onDismiss: () => void;
}> = ({ name, surname, title, experience, education, onDismiss }) => {
  const expFields: string[][] = Object.entries(experience);
  const eduFields: string[][] = Object.entries(education);

  return (
    <IonCard className="modal-card-wrapper">
      <IonCardHeader>
        <IonCardTitle>
          {name} {surname}
        </IonCardTitle>
        <IonCardSubtitle>{title}</IonCardSubtitle>
      </IonCardHeader>
      {expFields.length !== 0 && (
        <IonList className="modal-list">
          <IonListHeader> Experience </IonListHeader>
          {expFields.map((obj: string[]) => (
            <IonItem>
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

          {eduFields.map((obj: string[]) => (
            <IonItem>
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
