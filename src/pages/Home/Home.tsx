import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer/ExploreContainer';
import Layout from '../../components/Layout/Layout';
import './Home.css';

const Home: React.FC = () => {
  return (
    <Layout>
      <IonContent fullscreen>
        <ExploreContainer />
      </IonContent>
    </Layout>
  );
};

export default Home;
