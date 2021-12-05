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
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFilterString } from "../../store/userReducer";
import "./ProfileContainer.css";

const ProfileContainer: React.FC = () => {
  const name = "Ion";
  const surname = "Vasilache";
  const title = "Frontend Developer";
  const fetchedSkills = {
    "C++": "advanced",
    Java: "intermediate",
    JavaScript: "advanced",
    OOP: "beginner",
  };
  const company_name = "Google";
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
    "C++ Developer"
  ];
  const [type, setType] = useState(1);
  const [searchedSkills, setSearchedSkills] = useState([]);
  const [searchedJobs, setSearchedJobs] = useState([]);
  const dispatch = useDispatch();
  const skillFields: string[][] = Object.entries(fetchedSkills);
  const jobsFields: string[][] = Object.entries(fetchedJobs);

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
              {name} {surname}
            </IonCardTitle>
            <IonCardSubtitle>{title}</IonCardSubtitle>
          </IonLabel>

          <IonCardContent className="card-content">
            {skillFields.length !== 0 &&
              skillFields.map((obj: string[], index) => (
                <div className="skill-field">
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
            <IonCardTitle>{company_name}</IonCardTitle>
          </IonLabel>
          <IonCardContent className="card-content">
            {jobsFields.length !== 0 &&
              jobsFields.map((obj: string[]) => (
                <div className="skill-field">
                  <IonText>{obj[0]}</IonText>
                  <IonBadge>{obj[1]}</IonBadge>
                </div>
              ))}
            <div className="card-content">
              <IonLabel className="filter-field"> Looking for: </IonLabel>
              <IonSelect
                value={searchedSkills}
                okText="Save"
                cancelText="Dismiss"
                placeholder="Pick at least one skill.."
                multiple={true}
                onIonChange={(e) => {
                    setSearchedSkills(e.detail.value);
                    dispatch(updateFilterString(e.detail.value));
                }}
              >
                {skills.map((obj: string) => (
                  <IonSelectOption value={obj}> {obj} </IonSelectOption>
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