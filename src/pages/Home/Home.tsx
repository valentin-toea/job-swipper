import { IonContent, useIonLoading } from "@ionic/react";
import React from "react";
import ExploreContainer from "../../components/ExploreContainer/ExploreContainer";
import Layout from "../../components/Layout/Layout";
import "./Home.css";
import { useSelector } from "react-redux";

const Home: React.FC = () => {
  const userType = useSelector(
    (state: { user: { userType: number } }) => state.user.userType
  );

  const loadingState = useSelector(
    (state: { cardContent: { loading: boolean } }) => state.cardContent.loading
  );

  const [showLoading, dismissLoading] = useIonLoading();

  React.useEffect(() => {
    loadingState &&
      showLoading({
        message: "Loading...",
      });
    !loadingState && dismissLoading();
  }, [loadingState]);

  return (
    <>
      {!loadingState && (
        <Layout>
          <IonContent fullscreen>
            <ExploreContainer isRecruiter={userType === 2 ? true : false} />
          </IonContent>
        </Layout>
      )}
    </>
  );
};

export default Home;
