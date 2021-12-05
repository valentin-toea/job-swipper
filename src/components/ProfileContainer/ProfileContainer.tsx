import {
  IonAvatar,
  IonBadge,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonText,
} from "@ionic/react";
import { setRecruiterJob, updateFilterString } from "../../store/userReducer";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MAIN_URL } from "../../utils/url";
import "./ProfileContainer.css";
interface StoreState {
  user: {
    userData: { id: number; username: string; password: string };
    userType: number;
  };
}
interface CurrentUser {
  id: number;
  username: string;
  password: string;
}
interface User {
  name: string;
  surname: string;
}

const ProfileContainer: React.FC = () => {
  const user: CurrentUser = useSelector(
    (state: StoreState) => state.user.userData
  );
  const type = useSelector((state: StoreState) => state.user.userType);
  const [userData, setUserData] = useState<User>({ name: "", surname: "" });

  React.useEffect(() => {
    let ENDPOINT = "current_user";
    axios
      .post(MAIN_URL + ENDPOINT, { user_id: user.id, type: type })
      .then((res) => setUserData(res.data));
  }, []);

  const title = "Frontend Developer";
  const fetchedSkills = {
    "C++": "advanced",
    Java: "intermediate",
    JavaScript: "advanced",
    OOP: "beginner",
  };
  const fetchedJobs = {
    "Frontend Developer": "Open",
    "Backend Developer": "Closed",
    "Business Analyst": "Open",
    "ServiceNow Developer": "Closed",
  };
  const skills = [
    "C++",
    "C#",
    "Java",
    "JavaScript",
    "React",
    "Angular",
    "Vue",
    "Python",
    "Fortran",
    "Verilog",
  ];
  const jobs = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Salesforce Developer",
    "Business Analyst",
    "HR Specialist",
    "DevOps Engineer",
    "Software Engineer",
    "ServiceNow Developer",
    "C++ Developer",
  ];
  const [searchedSkills, setSearchedSkills] = useState([]);
  const [searchedJobs, setSearchedJobs] = useState([]);
  const dispatch = useDispatch();
  const skillFields: string[][] = Object.entries(fetchedSkills);
  const jobsFields: string[][] = Object.entries(fetchedJobs);

  const jobsList = useSelector(
    (state: { user: { jobs: [] } }) => state.user.jobs
  );
  const selectJobForRecruiter = useSelector(
    (state: { user: { recruiterJob: number } }) => state.user.recruiterJob
  );

  return (
    <div>
      {type === 1 ? (
        <>
          <div className="avatar-wrapper">
            <IonAvatar className="avatar">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
          </div>

          <IonLabel className="header-wrapper">
            <IonCardTitle>
              {userData.name} {userData.surname}
            </IonCardTitle>
            <IonCardSubtitle>{title}</IonCardSubtitle>
          </IonLabel>

          <IonCardContent className="card-content">
            {skillFields.length !== 0 &&
              skillFields.map((obj: string[], index: number) => (
                <div className="skill-field" key={index}>
                  <IonText>{obj[0]}</IonText>
                  <IonBadge color="secondary">{obj[1]}</IonBadge>
                </div>
              ))}

            <div className="card-content">
              <IonLabel className="filter-field"> Looking for: </IonLabel>
              <IonSelect
                value={searchedJobs}
                okText="Save"
                cancelText="Dismiss"
                placeholder="Pick at least one job.."
                multiple={true}
                onIonChange={(e) => {
                  setSearchedJobs(e.detail.value);
                  dispatch(updateFilterString(e.detail.value));
                }}
              >
                {jobs.map((obj: string) => (
                  <IonSelectOption value={obj}> {obj} </IonSelectOption>
                ))}
              </IonSelect>
            </div>
          </IonCardContent>
        </>
      ) : (
        <>
          <div className="avatar-wrapper">
            <IonAvatar className="avatar">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
          </div>
          <IonLabel className="header-wrapper">
            <IonCardTitle>
              {userData.name} {userData.surname}
            </IonCardTitle>
          </IonLabel>
          <IonCardContent className="card-content">
            {jobsFields.length !== 0 &&
              jobsFields.map((obj: string[], index: number) => (
                <div className="skill-field" key={index}>
                  <IonText>{obj[0]}</IonText>
                  <IonBadge>{obj[1]}</IonBadge>
                </div>
              ))}
            <div className="card-content">
              <IonLabel className="filter-field"> Select Job: </IonLabel>
              <IonSelect
                value={selectJobForRecruiter}
                okText="Save"
                cancelText="Dismiss"
                placeholder="Pick a job for hiring"
                onIonChange={(e) => {
                  dispatch(setRecruiterJob(e.detail.value));
                }}
              >
                {jobsList.map((obj: any) => (
                  <IonSelectOption value={obj.id} key={obj.id}>
                    {" "}
                    {obj.name}{" "}
                  </IonSelectOption>
                ))}
              </IonSelect>
              <IonLabel className="filter-field"> Looking for: </IonLabel>
              <IonSelect
                value={searchedSkills}
                okText="Save"
                cancelText="Dismiss"
                placeholder="Pick at least one skill.."
                multiple={true}
                onIonChange={(e) => {
                  setSearchedSkills(e.detail.value);
                  dispatch(updateFilterString(e.detail.value.join(",")));
                }}
              >
                {skills.map((obj: string, index: number) => (
                  <IonSelectOption value={obj} key={index}>
                    {" "}
                    {obj}{" "}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </div>
          </IonCardContent>
        </>
      )}
    </div>
  );
};

export default ProfileContainer;
