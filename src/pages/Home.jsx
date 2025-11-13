import React, { useEffect } from "react";
import Banner from "../components/home/Banner";
import CategorySection from "../components/home/CategorySection";
import RecentListings from "../components/home/RecentListings";
import AdoptionPledge from "../components/home/AdoptionPledge";
import PetHeroes from "../components/home/PetHeroes";

export default function Home() {
  useEffect(() => {
    document.title = "PawMart — Home";
  }, []);

  return (
    <div className="w-full min-h-screen space-y-12">
      <Banner />

      <div className="space-y-12"
      style={{
        marginTop: "50px"
      }}
      >
        <CategorySection />
        <RecentListings />
        <AdoptionPledge />
      </div>

      <PetHeroes />
    </div>
  );
}
