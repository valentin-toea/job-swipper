import "./ExploreContainer.css";
import React from "react";
import { Swipeable, direction } from "react-deck-swiper";
import Card from "../Card/Card";
import { IonButton, IonIcon, useIonModal, useIonToast } from "@ionic/react";
import { star, close, heart } from "ionicons/icons";
import ModalBody from "../CardModal/CardModal";

const ExploreContainer: React.FC = () => {
  const [lastSwipeDirection, setLastSwipeDirection] = React.useState("");
  const [cards, setCards] = React.useState([0, 1, 2, 3, 4, 5, 6]);

  const [present, dismiss] = useIonToast();

  const handleModalDismiss = () => {
    modalDismiss();
  }
  const name = "Ion";
  const surname = "Vasilache";
  const title = "Frontend Developer";
  const experience = {
    'UPB' : 'student',
    'Google.com' : 'CEO for 3 years'
  };
  const education = {
    'CNTV' : 'smecher 2012-2019',
    'UPB' : 'mai putin smecher, 2020 - azi si inca 5 ani ma asteapta'
  };
  const [modalPresent, modalDismiss] = useIonModal(ModalBody,{
    name,
    surname,
    title,
    experience,
    education,
    onDismiss: handleModalDismiss,
  })

  const handleOnSwipe = (swipeDirection: any) => {
    if (swipeDirection === direction.RIGHT) {
      setLastSwipeDirection("your right");
      present({
        buttons: [{ text: "UNDO", handler: () => dismiss() }],
        color: "success",
        duration: 3000,
        message: "Accepted this job offer",
        onDidDismiss: () => console.log("dismissed"),
        onWillDismiss: () => console.log("will dismiss"),
      });
    }

    if (swipeDirection === direction.LEFT) {
      setLastSwipeDirection("your left");
      present({
        buttons: [{ text: "UNDO", handler: () => dismiss() }],
        color: "danger",
        message: "Refused this job offer",
        duration: 3000,
        onDidDismiss: () => console.log("dismissed"),
        onWillDismiss: () => console.log("will dismiss"),
      });
    }

    setCards((prev) => prev.slice(1));
  };

  return (
    <div className="explore-container">
      {cards.length > 0 && (
        <>
          <Swipeable onSwipe={handleOnSwipe} >
            <Card info={cards[0]} onClick={() => {
              modalPresent({})
            }}/>

          </Swipeable>

          <div className="explore-button-group">
            <IonButton
              color="light"
              shape="round"
              size="large"
              onClick={() => handleOnSwipe(direction.LEFT)}
            >
              <IonIcon
                slot="icon-only"
                icon={close}
                style={{ color: "#e53935" }}
              />
            </IonButton>
            <IonButton color="light" shape="round">
              <IonIcon
                slot="icon-only"
                icon={star}
                style={{ color: "#6dd5ed" }}
              />
            </IonButton>
            <IonButton
              color="light"
              shape="round"
              size="large"
              onClick={() => handleOnSwipe(direction.RIGHT)}
            >
              <IonIcon
                slot="icon-only"
                icon={heart}
                style={{ color: "#93F9B9" }}
              />
            </IonButton>
          </div>
        </>
      )}
    </div>
  );
};

export default ExploreContainer;
