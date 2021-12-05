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

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [userType, setUserType] = useState<string | any>("1");

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
              <IonLabel position="fixed">Email</IonLabel>
              <IonInput
                value={email}
                placeholder="email@address.com"
                onIonChange={(e) => setEmail(e.detail.value!)}
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
            <div style={{ padding: "30px 60px" }}>
              <IonSegment
                value={userType}
                onIonChange={(e) => setUserType(e.detail.value)}
              >
                <IonSegmentButton value="1">
                  <IonLabel>Person</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="2">
                  <IonLabel>Company</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </div>
          </IonList>
          <IonButton
            color="primary"
            className="auth-button"
            onClick={() =>
              dispatch(
                authenticateUser({ userType, formData: { email, password } })
              )
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
