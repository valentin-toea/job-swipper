import "./ExploreContainer.css";
import React from "react";
import { Swipeable, direction } from "react-deck-swiper";
import Card from "../Card/Card";
import { IonButton, IonIcon, useIonToast } from "@ionic/react";
import { star, close, heart } from "ionicons/icons";

const ExploreContainer: React.FC = () => {
  const [lastSwipeDirection, setLastSwipeDirection] = React.useState("");
  const [cards, setCards] = React.useState([0, 1, 2, 3, 4, 5, 6]);

  const [present, dismiss] = useIonToast();

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
        <Swipeable onSwipe={handleOnSwipe}>
          <Card info={cards[0]} />
        </Swipeable>
      )}
      <div className="explore-button-group">
        <IonButton
          color="light"
          shape="round"
          size="large"
          onClick={() => handleOnSwipe(direction.LEFT)}
        >
          <IonIcon slot="icon-only" icon={close} style={{ color: "#e53935" }} />
        </IonButton>
        <IonButton color="light" shape="round">
          <IonIcon slot="icon-only" icon={star} style={{ color: "#6dd5ed" }} />
        </IonButton>
        <IonButton
          color="light"
          shape="round"
          size="large"
          onClick={() => handleOnSwipe(direction.RIGHT)}
        >
          <IonIcon slot="icon-only" icon={heart} style={{ color: "#93F9B9" }} />
        </IonButton>
      </div>
    </div>
  );
};

export default ExploreContainer;
