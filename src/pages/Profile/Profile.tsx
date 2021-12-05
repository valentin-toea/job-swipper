import { IonContent } from "@ionic/react";
import Layout from "../../components/Layout/Layout";
import ProfileContainer from "../../components/ProfileContainer/ProfileContainer";

const Profile: React.FC = () => {
  return (
    <Layout>
      <IonContent fullscreen>
        <ProfileContainer />
      </IonContent>
    </Layout>
  );
};

export default Profile;
