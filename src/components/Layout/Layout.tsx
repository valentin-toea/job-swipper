import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonPage,
} from "@ionic/react";
import { personCircle, flame, chatbubble } from "ionicons/icons";
import { Redirect, Route, Switch } from "react-router-dom";
import "./Layout.css";

const comp: React.FC = () => <div>salut</div>;

const Layout: React.FC = ({ children }) => (
  <IonPage>
    <Switch>
      <Route path="/tabs/:tab(home)" component={comp} exact />
      <Route path="/tabs/:tab(test)" component={comp} exact />
      <Redirect from="/tabs" to="/tabs/home" />
    </Switch>
    <IonTabBar slot="top">
      <IonTabButton tab="profile" className="first-tab">
        <IonIcon icon={personCircle} />
      </IonTabButton>

      <IonTabButton tab="finder" href={"/"}>
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
