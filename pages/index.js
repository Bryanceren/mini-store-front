import BottomNavigation from "../components/common/BottomNavigation/BottomNavigation";
import Navigation from "../components/common/Navigation/Navigation";
import PageLayout from "../components/common/PageLayout/PageLayout";
import MainPage from "../components/MainPage/MainPage";

export default function Home() {
  return (
    <PageLayout>
      <Navigation />
      <MainPage />
      <BottomNavigation />
    </PageLayout>
  );
}
