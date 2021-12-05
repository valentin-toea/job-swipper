import { IonContent } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer/ExploreContainer";
import Layout from "../../components/Layout/Layout";
import "./Home.css";
import { useSelector } from "react-redux";

interface StoreState {
  pictures: { list: [] };
}

const Home: React.FC = () => {
  const pictures = useSelector((state: StoreState) => state.pictures.list);
  const userType = useSelector(
    (state: { user: { userType: number } }) => state.user.userType
  );

  return (
    <Layout>
      <IonContent fullscreen>
        <ExploreContainer isRecruiter={userType === 2 ? true : false} />
      </IonContent>
    </Layout>
  );
};

export default Home;
