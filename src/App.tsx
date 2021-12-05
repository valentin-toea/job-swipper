import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home/Home";
<<<<<<< HEAD

=======
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";
>>>>>>> 6838ec6ba3e13fe28d056097476325ff393b1283
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import { useSelector } from "react-redux";

interface StoreState {
  user: { loggedIn: boolean };
}

const App: React.FC = () => {
  const loggedIn = useSelector((state: StoreState) => state.user.loggedIn);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route
            path="/home"
            render={() => (loggedIn ? <Home /> : <Redirect to="/login" />)}
          />
          <Route
            exact
            path="/login"
            render={() => (!loggedIn ? <Login /> : <Redirect to="/home" />)}
          />
          <Route exact 
            path="/profile" 
            render={() => (loggedIn ? <Profile /> : <Redirect to="/login"/> )}/>


        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
