import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useParams } from "react-router";
import API from "../hooks/useAxios";
import toast from "react-hot-toast";
import ListDetailsStyle from "../components/listDetails/ListDetailsStyle";



export default function ListingDetails() {
  const { id } = useParams(); 
  const [item, setItem] = useState(null); 
  const { user } = useAuth(); 
  const [isLoading, setIsLoading] = useState(true);
  const [isOrdering, setIsOrdering] = useState(false);
  
  const [order, setOrder] = useState({
    quantity: 1, address: "", phone: "", date: "", additionalNotes: ""
  });

  // Update page title dynamically
  useEffect(() => {
    document.title = item ? `PawMart — ${item.name}` : "PawMart — Listing";
  }, [item]);

  // Fetch listing details
  useEffect(() => {
    const fetchListById = async (listingId) => {
      setIsLoading(true);
      try {
        const res = await API.get(`/api/listings/${listingId}`); 

        const listData = res.data.list || {}
        
        if (res.data.success && res.data.list) {
          setItem(listData);
          setOrder(prev => ({ ...prev, quantity: 1 }));
        } else {
          console.warn("Listing not found or response failed.");
          setItem(null);
        }
      } catch (error) {
        console.error("fetching single list error", error);
        setItem(null); 
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchListById(id);
    }

  }, [id]); 

  // Handle Order/Adoption
  const placeOrder = async () => {
    if (!user) return toast.error("Please log in to proceed.");
    if (!order.address || !order.phone || !order.date) {
      return toast.error("Address, phone, and date are required.");
    }

    setIsOrdering(true);

    const payload = {
      productId: item._id,
      productName: item.name,
      buyerName: user.displayName || user.email,
      email: user.email,
      quantity: item.category === "Pets" ? 1 : order.quantity,
      price: item.Price,
      address: order.address,
      phone: order.phone,
      date: order.date,
      additionalNotes: order.additionalNotes,
      createdAt: new Date().toISOString()
    };

    try {
      await API.post(`/api/orders`, payload);
      toast.success(`${item.category === "Pets" ? "Adoption request sent" : "Order placed"} successfully!`);
      // Reset form fields but keep default quantity for non-pets
      setOrder({ quantity: item.category === "Pets" ? 1 : 1, address: "", phone: "", date: "", additionalNotes: "" });
    } catch (err) {
      console.error(err);
      toast.error("Transaction failed. Please try again.");
    } finally {
      setIsOrdering(false);
    }
  };
  
  // Render States
  if (isLoading) {
    return (
      <div className="loading-screen">
        <svg className="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Loading Listing Details...</span>
      </div>
    );
  }

  if (!item) {
    return <div className="container-wrapper p-8 text-center text-red-500 font-semibold">Listing not found.</div>;
  }

  const isPet = item?.category === "Pets";
  const orderButtonText = isPet ? (isOrdering ? "Requesting Adoption..." : "Adopt This Pet") : (isOrdering ? "Placing Order..." : "Place Order");
  const price = Number(item?.price || 0);
  

  // Main Render
  return (
    <div className="container-wrapper">
      <div className="listing-card">
        
        {/* Header */}
        <div className="header-section">
          <span className="category-badge">
            {item?.category}
          </span>
          <h1 className="listing-title">
            {item?.name}
          </h1>
          <p className="listing-price">
            {price === 0 ? "Free for Adoption" : `$${price.toFixed(2)}`}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="content-grid">
          
          {/*  Image and Descrip */}
          <div className="main-content-area">
            {/* Img */}
            <div className="listing-image-wrapper">
              <img
                src={item.image || "https://placehold.co/800x500/F3F4F6/6B7280?text=Image+Unavailable"}
                alt={item.name}
                className="listing-image"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x500/F3F4F6/6B7280?text=Image+Unavailable"; }}
              />
            </div>

            {/* Desc*/}
            <section className="description-section">
              <h3 className="description-title">Full Description</h3>
              <p className="description-text">
                {item.description}
              </p>
            </section>

            <div className="metadata-info">
                <p><strong>Owner Contact:</strong> <a href={`mailto:${item.email}`}>{item.email}</a></p>
                <p><strong>Location:</strong> {item.location}</p>
            </div>
          </div>

          {/*  OrderAdopt Form */}
          <div className="order-form-card">
            <h4 className="order-form-title">
              {isPet ? "Adoption Application" : "Complete Your Order"}
            </h4>

            <div className="form-field-group">
        
              <input className="form-input read-only-input" value={user?.displayName || user?.email || "Login Required"} readOnly />
              <input className="form-input read-only-input" value={user?.email || "N/A"} readOnly />
              <input className="form-input read-only-input price-display" value={`Price: ${price === 0 ? "Free" : `$${price.toFixed(2)}`}`} readOnly />

              {!isPet && (
                <div className="input-with-label">
                    <label htmlFor="quantity" className="label-text">Quantity</label>
                    <input
                      id="quantity"
                      className="form-input"
                      type="number"
                      min={1}
                      value={order.quantity}
                      onChange={e => setOrder({ ...order, quantity: Number(e.target.value) })}
                    />
                </div>
              )}

              <input
                className="form-input"
                placeholder="Shipping Address (Required)"
                value={order.address}
                onChange={e => setOrder({ ...order, address: e.target.value })}
                required
              />
              <input
                className="form-input"
                placeholder="Phone Number (Required)"
                value={order.phone}
                onChange={e => setOrder({ ...order, phone: e.target.value })}
                required
              />
              <div className="input-with-label">
                <label htmlFor="date" className="label-text">Preferred Delivery/Adoption Date (Required)</label>
                <input
                  id="date"
                  className="form-input"
                  type="date"
                  value={order.date}
                  onChange={e => setOrder({ ...order, date: e.target.value })}
                  required
                />
              </div>

              {/* Nt */}
              <textarea
                className="form-input textarea-input"
                placeholder="Additional notes for the seller/owner..."
                rows={3}
                value={order.additionalNotes}
                onChange={e => setOrder({ ...order, additionalNotes: e.target.value })}
              />
              <button 
                className="submit-btn"
                onClick={placeOrder} 
                disabled={isOrdering || !user}
              >
                {orderButtonText}
              </button>
              {!user && (
                  <p className="login-required-message">Please log in to submit.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <ListDetailsStyle />
    </div>
  );
}

