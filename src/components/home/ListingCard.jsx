const ListingCard = ({ listing, navigate }) => {
  const priceText = Number(listing.Price) === 0 ? "Free for Adoption" : `$${Number(listing.Price).toFixed(2)}`;
  
  return (
    <div className="listing-card">
      <div className="card-image-wrapper">
        <img
          src={listing.image || "https://placehold.co/400x300/F3F4F6/6B7280?text=No+Image"}
          alt={listing.name}
          className="card-image"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/F3F4F6/6B7280?text=No+Image"; }}
        />
        <span className="card-category-badge">{listing.category}</span>
      </div>
      
      <div className="card-content">
        <h3 className="card-name">{listing.name}</h3>
        <p className="card-location">
            <svg xmlns="http://www.w3.org/2000/svg" className="location-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
            </svg>
            {listing.location}
        </p>
        <p className={`card-price ${Number(listing.Price) === 0 ? 'text-indigo-600 font-bold' : ''}`}>
          {priceText}
        </p>
        
        <button 
          className="details-btn"
          onClick={() => navigate(`/listing/${listing._id}`)}
        >
          See Details
        </button>
      </div>
    </div>
  );
};


export default ListingCard;