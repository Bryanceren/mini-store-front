import { useRouter } from "next/router";
import React from "react";
import BottomNavigation from "../../components/common/BottomNavigation/BottomNavigation";
import Navigation from "../../components/common/Navigation/Navigation";
import PageLayout from "../../components/common/PageLayout/PageLayout";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

const productId = () => {
  return (
    <PageLayout>
      <Navigation />
      <ProductDetail />
      <BottomNavigation />
    </PageLayout>
  );
};

export default productId;
