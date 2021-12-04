import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
  IonPage,
  IonRouterOutlet,
} from "@ionic/react";
import { calendar, personCircle, map, informationCircle } from "ionicons/icons";
import { Redirect, Route, Switch } from "react-router-dom";

const comp: React.FC = () => <div>salut</div>;

const Layout: React.FC = ({ children }) => (
  <IonPage>
    <Switch>
      <Route path="/tabs/:tab(home)" component={comp} exact />
      <Route path="/tabs/:tab(test)" component={comp} exact />
      <Redirect from="/tabs" to="/tabs/home" />
    </Switch>
    <IonTabBar slot="top">
      <IonTabButton tab="schedule" href={"/"}>
        <IonIcon icon={calendar} />
        <IonLabel>Schedule</IonLabel>
        <IonBadge>6</IonBadge>
      </IonTabButton>

      <IonTabButton tab="speakers">
        <IonIcon icon={personCircle} />
        <IonLabel>Speakers</IonLabel>
      </IonTabButton>

      <IonTabButton tab="map">
        <IonIcon icon={map} />
        <IonLabel>Map</IonLabel>
      </IonTabButton>

      <IonTabButton tab="about">
        <IonIcon icon={informationCircle} />
        <IonLabel>About</IonLabel>
      </IonTabButton>
    </IonTabBar>
    {children}
  </IonPage>
);

export default Layout;
