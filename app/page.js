import React from "react";
import Banner from "@/app/components/Banner/Banner";
import ExploreByCities from "@/app/components/ExploreByCities/ExploreByCities";
import AboutUs from "@/app/components/AboutUs/AboutUs";
import RealEstate from "@/app/components/RealEstate/RealEstate";
import HowItWork from "@/app/components/HowItWork/HowItWork";
import CustomerReview from "@/app/components/CustomerReview/CustomerReview";
import FeaturedProperties from "@/app//components/FeaturedProperties/FeaturedProperties";
export default function homePage() {
  return (
    <div>
      <Banner />
      <ExploreByCities />
      <FeaturedProperties />
      <AboutUs />
      <RealEstate />
      <HowItWork />
      <CustomerReview />
    </div>
  );
}
