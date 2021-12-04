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
import {
  calendar,
  personCircle,
  map,
  informationCircle,
  flameOutline,
  chatbubbleOutline,
} from "ionicons/icons";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import "./Layout.css";

const comp: React.FC = () => <div>salut</div>;

const Layout: React.FC = ({ children }) => (
  <IonPage>
    <BrowserRouter>
    <Switch>
      <Route path="/tabs/:tab(home)" component={comp} exact />
      <Route path="/tabs/:tab(test)" component={comp} exact />
      <Redirect from="/tabs" to="/tabs/home" />
    </Switch>
    </BrowserRouter>
    <IonTabBar slot="top">
      <IonTabButton tab="profile" href={"/"} className="first-tab">
        <IonIcon icon={personCircle} />
      </IonTabButton>

      <IonTabButton tab="finder">
        <IonIcon icon={flameOutline} />
      </IonTabButton>

      <IonTabButton tab="chat" className="last-tab">
        <IonIcon icon={chatbubbleOutline} />
      </IonTabButton>
    </IonTabBar>
    {children}
  </IonPage>
);

export default Layout;
