import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonPage,
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

      <IonTabButton tab="chat" className="last-tab">
        <IonIcon icon={chatbubble} />
      </IonTabButton>
    </IonTabBar>
    {children}
  </IonPage>
);

export default Layout;
