import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/PetsAndSupplies.css";
import API from "../hooks/useAxios";
import ListingFilters from "../components/petAndsupplies/ListingFilters";

export default function PetsAndSupplies() {
  const { categoryName } = useParams();
  const [listings, setListings] = useState([]);
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState(categoryName || "");

  useEffect(() => {
    document.title = "PawMart — Pets & Supplies";
  }, []);

useEffect(() => {
  const fetchListings = async () => {
    let url = "/api/listings";
    const params = {};
    if (filter) params.category = filter;
    const query = new URLSearchParams(params).toString();

    try {
      const res = await API.get(`${url}${query ? "?" + query : ""}`);

      const listsData = res.data.data || [];

      setListings(listsData); 
    } catch (err) {
      console.error("Error fetching listings:", err);
      setListings([]);
    }
  };

  fetchListings();
}, [filter, categoryName]);





  const filteredListings = listings?.filter(
    (l) =>
      (!filter || l?.category === filter) &&
      l?.name?.toLowerCase().includes(q.toLowerCase())
  );


  return (
    <div className="container">
      <h2 className="page-title">Pets & Supplies</h2>

      <ListingFilters 
      setQ={setQ}
      setFilter={setFilter} 
      />

      <div className="grid-3">
        {filteredListings.length === 0 && (
          <div className="no-listings">No listings found</div>
        )}
        {filteredListings.map((l) => (
          <motion.div
            key={l._id}
            className="card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="card-top">
              <img
                src={l?.image || "/placeholder.jpg"}
                alt={l?.name}
                className="card-img"
              />
            </div>
            <div className="card-bottom">
              <div className="card-title">{l?.name}</div>
              <div className="card-category">{l?.category}</div>
              <div className="card-location">{l?.location}</div>
              <div className="card-price">
                {l?.price === 0 ? (
                  <strong>Free</strong>
                ) : (
                  <strong>${l?.price}</strong>
                )}
              </div>
              <Link to={`/listing/${l?._id}`}>
                <button className="btn card-btn">See Details</button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
