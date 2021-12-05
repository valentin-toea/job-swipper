import "./ExploreContainer.css";
import React from "react";
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
import {
  removeOnePersonFromList,
  swipeCard,
} from "../../store/cardContentReducer";

const name = "Ion";
const surname = "Vasilache";
const title = "Frontend Developer";
const experience = {
  UPB: "student",
  "Google.com": "CEO for 3 years",
};
const education = {
  CNTV: "smecher 2012-2019",
  UPB: "mai putin smecher, 2020 - azi si inca 5 ani ma asteapta",
};
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
    (state: { cardContent: { peopleList: Array<any> } }) =>
      state.cardContent.peopleList
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
    company_name,
    job_title,
    description,
    requirements,
    onDismiss: handleJobModalDismiss,
  });

  const [modalPresent, modalDismiss] = useIonModal(ModalBody, {
    name,
    surname,
    title,
    experience,
    education,
    onDismiss: handleModalDismiss,
  });

  console.log(peopleList);
  const userData = useSelector(
    (state: { user: { userData: any } }) => state.user.userData
  );

  const selectJobForRecruiter = useSelector(
    (state: { user: { recruiterJob: number } }) => state.user.recruiterJob
  );

  const handleOnSwipe = (swipeDirection: any) => {
    setPictureIndex(Math.floor(Math.random() * 50));

    if (swipeDirection === direction.RIGHT) {
      setLastSwipeDirection("your right");
      present(swipeRight);
      if (isRecruiter) {
        dispatch(
          swipeCard({
            currentId: userData.id,
            swipedId: peopleList[0]["user_id"],
            jobId: selectJobForRecruiter,
            direction: 1,
          })
        );
      }
    }

    if (swipeDirection === direction.LEFT) {
      setLastSwipeDirection("your left");
      present(swipeLeft);
      if (isRecruiter) {
        dispatch(
          swipeCard({
            currentId: userData.id,
            swipedId: peopleList[0]["user_id"],
            jobId: selectJobForRecruiter,
            direction: 0,
          })
        );
      }
    }

    dispatch(removeOnePersonFromList({}));
  };

  return (
    <div className="explore-container">
      {cards.length > 0 && (
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
                info={cards[0]}
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
