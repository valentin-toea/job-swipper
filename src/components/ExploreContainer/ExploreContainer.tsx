import "./ExploreContainer.css";
import React, { useState } from "react";
import { Swipeable, direction } from "react-deck-swiper";
import Card from "../Card/Card";
import {
  IonButton,
  IonIcon,
  useIonLoading,
  useIonModal,
  useIonToast,
} from "@ionic/react";
import { star, close, heart } from "ionicons/icons";
import ModalBody from "../RecruitCardModal/RecruitCardModal";
import JobModalBody from "../JobCardModal/JobCardModal";
import CardWithJob from "../CardWithJob/CardWithJob";
import { useSelector, useDispatch } from "react-redux";
import { removeOneJobFromList, removeOnePersonFromList } from "../../store/cardContentReducer";

const company_name = "Meta";
const job_title = "Frontend Developer";
const description =
  "lorem lorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem";
const requirements = {
  "Minimum years": " 3 years of experience",
  "Known Technologies": "SQL, JAVA, REACT, GIT",
};

const ExploreContainer: React.FC<{ isRecruiter: boolean }> = ({
  isRecruiter,
}) => {
  const dispatch = useDispatch();
  const pictures = useSelector(
    (state: { pictures: { list: [] } }) => state.pictures.list
  );
  const peopleList = useSelector(
    (state: { cardContent: { peopleList: Array<Object> } }) =>
      state.cardContent.peopleList
  );
  const jobList = useSelector(
    (state: { cardContent: { jobList: Array<Object> } }) =>
      state.cardContent.jobList
  );

  const [lastSwipeDirection, setLastSwipeDirection] = React.useState("");
  const [cards, setCards] = React.useState([0, 1, 2, 3, 4, 5, 6]);
  const [pictureIndex, setPictureIndex] = React.useState(
    Math.floor(Math.random() * 50)
  );

  const [present, dismiss] = useIonToast();

  const handleModalDismiss = () => {
    modalDismiss();
  };
  const handleJobModalDismiss = () => {
    jobModalDismiss();
  };

  const [jobModalPresent, jobModalDismiss] = useIonModal(JobModalBody, {
    job: jobList[0],
    onDismiss: handleJobModalDismiss,
  });

  const [modalPresent, modalDismiss] = useIonModal(ModalBody, {
    person: peopleList[0],
    onDismiss: handleModalDismiss,
  });


  const handleOnSwipe = (swipeDirection: any) => {
    isRecruiter && setPictureIndex(Math.floor(Math.random() * 50));

    if (swipeDirection === direction.RIGHT) {
      setLastSwipeDirection("your right");
      present(swipeRight);
    }

    if (swipeDirection === direction.LEFT) {
      setLastSwipeDirection("your left");
      present(swipeLeft);
    }

    //setCards((prev) => prev.slice(1));
    if (isRecruiter) {
      dispatch(removeOnePersonFromList({}));

    } else {
      dispatch(removeOneJobFromList({}));

    }
  };

  return (
    <div className="explore-container">
      {(
        <>
          <Swipeable onSwipe={handleOnSwipe}>
            {isRecruiter ? (
              <Card
                info={peopleList[0]}
                picture={pictures[pictureIndex]}
                onClick={() => {
                  modalPresent({});
                }}
              />
            ) : (
              <CardWithJob
                info={jobList[0]}
                onClick={() => jobModalPresent({})}
              />
            )}
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

const swipeRight = {
  buttons: [{ text: "UNDO", handler: () => {} }],
  color: "success",
  duration: 3000,
  message: "Accepted this job offer",
  onDidDismiss: () => console.log("dismissed"),
  onWillDismiss: () => console.log("will dismiss"),
};

const swipeLeft = {
  buttons: [{ text: "UNDO", handler: () => {} }],
  color: "danger",
  message: "Refused this job offer",
  duration: 3000,
  onDidDismiss: () => console.log("dismissed"),
  onWillDismiss: () => console.log("will dismiss"),
};
