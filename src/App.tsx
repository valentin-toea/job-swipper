import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, useIonLoading } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { useSelector, useDispatch } from "react-redux";
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
import React from "react";
import { getPictures } from "./store/picturesReducer";
import { getPeopleList } from "./store/cardContentReducer";
import Profile from "./pages/Profile/Profile";
import { getJobsForRecruiter, getMatches } from "./store/userReducer";
import Messages from "./pages/Messages/Messages";

interface StoreState {
  user: { loggedIn: boolean };
}

interface StoreState2 {
  user: { userType: number };
}

interface StoreState3 {
  user: { userData: any };
}

const App: React.FC = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state: StoreState) => state.user.loggedIn);
  const userType = useSelector((state: StoreState2) => state.user.userType);
  const userData = useSelector((state: StoreState3) => state.user.userData);

  React.useEffect(() => {
    dispatch(getPictures({}));
  }, []);

  React.useEffect(() => {
    userType === 2 && dispatch(getPeopleList({}));
    userType === 2 && dispatch(getJobsForRecruiter({ userId: userData.id }));

    let interv: ReturnType<typeof setInterval>;
    if (loggedIn) {
      interv = setInterval(() => {
        dispatch(getMatches({ userId: userData.id }));
      }, 10000);
    }

    return () => interv && clearInterval(interv);
  }, [loggedIn]);

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
          <Route
            exact
            path="/profile"
            render={() => (loggedIn ? <Profile /> : <Redirect to="/login" />)}
          />
          <Route
            exact
            path="/matches"
            render={() => (loggedIn ? <Messages /> : <Redirect to="/login" />)}
          />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
