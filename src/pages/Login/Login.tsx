import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonItemDivider,
  IonIcon,
  IonButton,
  IonListHeader,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../store/userReducer";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle>Job Swiper</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="login-body">
          <IonList lines="full" style={{ flex: 1, marginTop: "60px" }}>
            <IonListHeader>
              <IonLabel style={{ fontSize: "40px" }}>Get Started</IonLabel>
            </IonListHeader>
            <IonListHeader>
              <IonLabel>Login</IonLabel>
            </IonListHeader>
            <IonItem>
              <IonLabel position="fixed">Username</IonLabel>
              <IonInput
                value={username}
                placeholder="email@address.com"
                onIonChange={(e) => setUsername(e.detail.value!)}
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="fixed">Password</IonLabel>
              <IonInput
                type="password"
                value={password}
                placeholder="************"
                onIonChange={(e) => setPassword(e.detail.value!)}
              ></IonInput>
            </IonItem>
          </IonList>
          <IonButton
            color="primary"
            className="auth-button"
            onClick={() =>
              dispatch(authenticateUser({ formData: { username, password } }))
            }
          >
            Authenticate
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
