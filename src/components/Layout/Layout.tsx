import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonPage,
  IonBadge,
} from "@ionic/react";
import { personCircle, flame, chatbubble } from "ionicons/icons";
import "./Layout.css";
import { useSelector } from "react-redux";

interface Props {
  children: any;
}

const Layout: React.FC<Props> = ({ children }) => {
  const notificationNumber = useSelector(
    (state: { user: { notificationNumber: number } }) =>
      state.user.notificationNumber
  );

  const matches = useSelector(
    (state: { user: { matches: any } }) => state.user.matches
  );

  console.log(notificationNumber, matches);
  return (
    <IonPage>
      <IonTabBar slot="top">
        <IonTabButton tab="profile" className="first-tab" href={"/profile"}>
          <IonIcon icon={personCircle} />
        </IonTabButton>

        <IonTabButton tab="finder" href={"/home"}>
          <IonIcon icon={flame} />
        </IonTabButton>

        <IonTabButton tab="matches" className="last-tab" href={"/matches"}>
          <IonIcon icon={chatbubble} />
          {notificationNumber !== 0 && <IonBadge>{notificationNumber}</IonBadge>}
        </IonTabButton>
      </IonTabBar>
      {children}
    </IonPage>
  );
};

export default Layout;
