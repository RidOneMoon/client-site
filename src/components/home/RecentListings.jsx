import React, { useEffect, useState } from "react";
import RecentListingStyle from "./RecentListingStyle";
import ListingCard from "./ListingCard";
import API from "../../hooks/useAxios";
import { useNavigate } from "react-router";




export default function RecentListings() {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
  const fetchRecentListings = async () => {
    setIsLoading(true);
    try {
      
      const res = await API.get(`/api/listings?recent=true`);

      console.log("recent listed data:", res.data);

     
      if (res.data.success && Array.isArray(res.data.data)) {
        setListings(res.data.data);
      } else {
        setListings([]);
      }
    } catch (error) {
      console.error("Error fetching recent listings:", error);
      setListings([]);
    } finally {
      setIsLoading(false);
    }
  };

  fetchRecentListings();
}, []);


  if (isLoading) {
    return (
      <div className="loading-screen-small">
        <svg className="spinner-small" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Loading Recent Listings...</span>
      </div>
    );
  }

  return (
    <div className="recent-listings-section">
      <h2 className="section-title">🐾 Recent Listings</h2>
      <p className="section-subtitle">Discover the newest pets and products in our marketplace.</p>
      
      {listings.length === 0 ? (
        <div className="empty-state">
          No recent listings found. Check back soon!
        </div>
      ) : (
        <div className="listings-grid">
          {listings.map(listing => (
            <ListingCard 
              key={listing._id} 
              listing={listing} 
              navigate={navigate} 
            />
          ))}
        </div>
      )}

      {/* Embedded CSS for Styling */}
     <RecentListingStyle />
    </div>
  );
}