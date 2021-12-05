import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";
import { resetNotificationNumber } from "../../store/userReducer";
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonToggle,
  IonRadio,
  IonCheckbox,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonContent,
  IonAvatar,
  IonButton,
  useIonModal,
  IonSkeletonText,
} from "@ionic/react";
import ModalBody from "../../components/RecruitCardModal/RecruitCardModal";
import JobModalBody from "../../components/JobCardModal/JobCardModal";

const Body: React.FC<{
  count: number;
  onDismiss: () => void;
}> = ({ onDismiss }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      padding: 20,
      height: "100%",
    }}
  >
    <IonLabel style={{ fontSize: 30 }}>CHAT</IonLabel>
    <div>
      <div className="ion-padding custom-skeleton">
        <IonSkeletonText animated style={{ width: "80px", height: "60px" }} />
        <IonSkeletonText animated />
        <IonSkeletonText animated style={{ width: "88%" }} />
        <IonSkeletonText animated style={{ width: "70%" }} />
        <IonSkeletonText animated style={{ width: "60%" }} />
      </div>
    </div>

    <div className="ion-padding custom-skeleton">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          width: "100%",
        }}
      >
        <IonSkeletonText animated style={{ width: "80px", height: "60px" }} />
        <IonSkeletonText animated />
        <IonSkeletonText animated style={{ width: "88%" }} />
        <IonSkeletonText animated style={{ width: "70%" }} />
        <IonSkeletonText animated style={{ width: "60%" }} />
      </div>
    </div>
    <div style={{ flex: 1 }}>
      <div className="ion-padding custom-skeleton">
        <IonSkeletonText animated style={{ width: "80px", height: "60px" }} />
        <IonSkeletonText animated />
        <IonSkeletonText animated style={{ width: "88%" }} />
        <IonSkeletonText animated style={{ width: "70%" }} />
        <IonSkeletonText animated style={{ width: "60%" }} />
      </div>
    </div>
    <IonButton expand="block" onClick={onDismiss}>
      Close
    </IonButton>
  </div>
);

const Messages = () => {
  const dispatch = useDispatch();
  const messages = useSelector(
    (state: { user: { matches: [] } }) => state.user.matches
  );
  React.useEffect(() => {
    if (window.location.pathname === "/matches")
      dispatch(resetNotificationNumber({}));
  }, [window.location.pathname]);

  const [present, dismiss] = useIonModal(Body, {
    onDismiss: () => dismiss(),
  });

  const [job, setJob] = React.useState();
  const [person, setPerson] = React.useState();

  const [jobModalPresent, jobModalDismiss] = useIonModal(JobModalBody, {
    job,
    onDismiss: () => jobModalDismiss(),
  });

  const [modalPresent, modalDismiss] = useIonModal(ModalBody, {
    person,
    onDismiss: () => modalDismiss(),
  });

  return (
    <Layout>
      <IonContent fullscreen>
        <IonList lines="full" style={{ marginTop: 30 }}>
          {messages.length === 0 && <h2>You have no matches.</h2>}
          {messages?.length !== 0 &&
            messages.map((msg, index) => (
              <IonItemSliding key={index}>
                <IonItem
                  style={{ display: "flex", alignItems: "center" }}
                  button
                  onClick={() => present()}
                >
                  <IonAvatar style={{ minHeight: 40 }}>
                    <img src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" />
                  </IonAvatar>
                  <div
                    style={{
                      marginLeft: 15,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "start",
                    }}
                  >
                    <h4 style={{ margin: 0 }}>
                      {msg[1]["company_name"] + " - " + msg[1]["job_title"]}
                    </h4>
                    <h6 style={{ margin: 0, color: "gray" }}>
                      {msg[0]["name"] + "  " + msg[0]["surname"]}
                    </h6>
                  </div>
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption
                    onClick={() => {
                      setPerson(msg[0]);
                      modalPresent();
                    }}
                    color="danger"
                  >
                    Profile
                  </IonItemOption>
                </IonItemOptions>
                <IonItemOptions side="start">
                  <IonItemOption
                    onClick={() => {
                      setJob(msg[1]);
                      jobModalPresent();
                    }}
                  >
                    Job Description
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ))}
        </IonList>
      </IonContent>
    </Layout>
  );
};

export default Messages;
