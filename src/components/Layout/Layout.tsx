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

const Layout: React.FC = ({ children }) => (
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
        <IonBadge>6</IonBadge>
      </IonTabButton>
    </IonTabBar>
    {children}
  </IonPage>
);

export default Layout;
