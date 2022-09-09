import React from "react";
import Cart from "../components/Cart/Cart";
import BottomNavigation from "../components/common/BottomNavigation/BottomNavigation";
import Navigation from "../components/common/Navigation/Navigation";
import PageLayout from "../components/common/PageLayout/PageLayout";
import MainPage from "../components/MainPage/MainPage";

const cart = () => {
  return (
    <PageLayout>
      <Navigation />
      <Cart />
      <BottomNavigation />
    </PageLayout>
  );
};

export default cart;
