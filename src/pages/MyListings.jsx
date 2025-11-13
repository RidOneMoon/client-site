import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import API from "../hooks/useAxios";
import toast from "react-hot-toast";
import Style from "../components/myLists/Style";

export default function MyListings() {
  const { user } = useAuth();
  const [listings, setListings] = useState([]);
  const [isListsLoading, setIsListsLoading] = useState(false);
  const [isDeletingList, setIsDeletingList] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [listingToDelete, setListingToDelete] = useState(null);

  // Fetch lis
  const fetchListings = async () => {
    if (!user?.email) return;
    setIsListsLoading(true);

    try {
      const res = await API.get(`/api/listings/lists/${user.email}`);
      const listsData = res.data?.lists || [];
      setListings(res.data.success ? listsData : []);
    } catch (err) {
      console.error("Fetch listings error:", err);
      setListings([]);
    } finally {
      setIsListsLoading(false);
    }
  };

  useEffect(() => {
    document.title = "PawMart — My Listings";
    if (user) fetchListings();
  }, [user]);

  const openDeleteModal = (listingId) => {
    setListingToDelete(listingId);
    setShowConfirmModal(true);
  };

  const confirmDelete = async () => {
    if (!listingToDelete) return;
    setIsDeletingList(true);

    try {
      await API.delete(`/api/listings/${listingToDelete}`);
      toast.success("Listing successfully deleted!");
      setListings(prev => prev.filter(l => l._id !== listingToDelete));
    } catch (err) {
      console.error(err);
      toast.error("Deletion failed. Please try again.");
    } finally {
      setIsDeletingList(false);
      setShowConfirmModal(false);
      setListingToDelete(null);
    }
  };

  const closeConfirmModal = () => {
    setShowConfirmModal(false);
    setListingToDelete(null);
  };

  if (isListsLoading) {
    return (
      <div className="listings-page-wrapper">
        <div className="loading-indicator">
          <div className="spinner"></div>
          <span>Loading your listings...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="listings-page-wrapper">
      <h2 className="listings-title">My Listings</h2>

      {listings.length === 0 ? (
        <div className="empty-listings-message">
          You haven't created any listings yet. Start adding your pets or products!
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="listings-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((l) => {
                const price = l?.Price || 0;
                return (
                  <tr key={l._id}>
                    <td>
                      <img
                        src={l.image || "https://placehold.co/80x50/e5e7eb/6b7280?text=No+Image"}
                        alt={l.name}
                        className="listing-table-image"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://placehold.co/80x50/e5e7eb/6b7280?text=Image+Error";
                        }}
                      />
                    </td>
                    <td>{l.name}</td>
                    <td>{l.category}</td>
                    <td>{price === 0 ? "Free for Adoption" : `৳${Number(price).toFixed(2)}`}</td>
                    <td>
                      <button
                        className="table-btn view-btn"
                        onClick={() => window.location.href = `/listing/${l._id}`}
                      >
                        View
                      </button>
                      <button
                        className="table-btn delete-btn"
                        onClick={() => openDeleteModal(l._id)}
                        disabled={listingToDelete === l._id && isDeletingList}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">Confirm Deletion</h3>
            <p className="modal-message">
              Are you sure you want to permanently delete this listing? This action cannot be undone.
            </p>
            <div className="modal-actions">
              <button
                className="modal-btn cancel-btn"
                onClick={closeConfirmModal}
                disabled={isDeletingList}
              >
                Cancel
              </button>
              <button
                className="modal-btn confirm-delete-btn"
                onClick={confirmDelete}
                disabled={isDeletingList}
              >
                {isDeletingList ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CSS Styles */}
      <Style />
    </div>
  );
}
