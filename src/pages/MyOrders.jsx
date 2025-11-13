import React, { useEffect, useState } from "react";
import API from "../hooks/useAxios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import useAuth from "../hooks/useAuth";
import Style from "../components/myOrder/Style";


export default function MyOrders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [isOrdersLoading, setIsOrdersLoading] = useState(false);

  const fetch = async () => {
    if (!user || !user.email) return;

    setIsOrdersLoading(true);
    const email = user.email;
    try {
   
      const res = await API.get(`/api/orders/${email}`); 

      const ordersData = res.data?.orders;
      
      setOrders(ordersData || []);
    } catch(err) {
      console.error("Failed to fetch orders:", err);
      setOrders([]);
    } finally {
      setIsOrdersLoading(false);
    }
  };

  useEffect(() => { 
    document.title = "PawMart — My Orders"; 
    if (user) fetch(); 
  }, [user]); 

  const downloadPDF = () => {
    const doc = new jsPDF();
    
    // Set up header
    doc.setFontSize(18);
    doc.setTextColor(31, 41, 55); // Dark Gray
    doc.text("PawMart - My Orders Report", 14, 20);

    // Set up table content
    autoTable(doc, {
      startY: 30,
      styles: {
        fontSize: 10,
        cellPadding: 3,
      },
      headStyles: {
        fillColor: [79, 70, 229], // Indigo 600
        textColor: 255,
        fontStyle: 'bold'
      },
      head: [["Product", "Price", "Quantity", "Address", "Date"]],
      body: orders.map(o => [
        o.productName, 
        o.price === 0 ? "FREE (Adoption)" : `$${Number(o.price).toFixed(2)}`, 
        String(o.quantity), 
        o.address, 
        o.date
      ])
    });

    doc.save("pawmart-my-orders.pdf");
  };


  // --- Render ---
  if(isOrdersLoading){
    return (
      <div className="orders-page-wrapper">
        <div className="orders-card">
          <div className="loading-indicator">
            <div className="spinner"></div>
            <span>Loading your order history...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-page-wrapper">
      <div className="orders-card">
        <div className="orders-header">
          <h2 className="orders-title">My Orders</h2>
          {/* Only show download button if there are orders */}
          {orders.length > 0 && (
             <button className="download-btn" onClick={downloadPDF}>
                {/* PDF Icon - Simple SVG for compatibility */}
                <svg className="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 17V3"></path>
                    <path d="M5 10l7 7 7-7"></path>
                    <path d="M19 21H5"></path>
                </svg>
                Download Report (PDF)
            </button>
          )}
        </div>
        
        {orders.length === 0 ? (
          <div className="empty-orders-message">
            You haven't placed any orders yet. Start shopping!
          </div>
        ) : (
            <div className="orders-table-wrapper">
                <table className="orders-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Address</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(o => (
                            <tr key={o._id}>
                                <td data-label="Product">{o.productName}</td>
                                <td data-label="Price">{o.price === 0 ? "FREE" : `$${Number(o.price).toFixed(2)}`}</td>
                                <td data-label="Qty">{o.quantity}</td>
                                <td data-label="Address">{o.address}</td>
                                <td data-label="Date">{o.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )}
      </div>

      {/* Plain CSS Styles for The Tailewind not working */}
      <Style />
    </div>
  );
}




