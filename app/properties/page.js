import React from "react";
import CommonBanner from "@/app/components/CommonBanner/CommonBanner";
import ExploreByCities from "@/app/components/ExploreByCities/ExploreByCities";
import Properties from "@/app/components/Properties/Properties";
export const metadata = {
    title: 'Inlivo | Properties',
};

const PropertiesPage = () => {
  return (
    <div>
      <CommonBanner/>
      <ExploreByCities />
      <Properties />
    </div>
  );
};

export default PropertiesPage;