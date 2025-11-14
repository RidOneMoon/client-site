import React from "react";
import { useNavigate } from "react-router-dom";


const categories = [
 
  { name: "Pets", emoji: "🐶" },
  { name: "Pet Food", emoji: "🍖" },
  { name: "Accessories", emoji: "🧸" },
  { name: "Pet Care Products", emoji: "🧸" },


];




const categoryCardStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px", 
  padding: "12px 25px", 
  cursor: "pointer",
  backgroundColor: "#ffffff", 
  borderRadius: "50px", 
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)", 
  transition: "all 0.3s ease-in-out", 
  minWidth: "150px", 
  flexShrink: 0, 
};

// Hover effect
const categoryCardHoverStyle = {
  backgroundColor: "#fff7e6",
  border: "2px solid #ff9900",
  transform: "scale(1.05)", 
  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
};


const emojiStyle = { fontSize: "24px" };
const nameTextStyle = { fontWeight: 700, fontSize: "16px", color: "#333" };



const CategoryCard = ({ category, nav }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const mergedStyle = {
    ...categoryCardStyle,
    ...(isHovered ? categoryCardHoverStyle : {}),
  };

  return (
    <div
      key={category.name}
      style={mergedStyle}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => nav(`/category-filtered-product/${encodeURIComponent(category.name)}`)}
    >
      <span style={emojiStyle} role="img" aria-label={category.name}>
        {category.emoji}
      </span>
      <span style={nameTextStyle}>{category.name}</span>
    </div>
  );
};

export default function CategorySection() {
  const nav = useNavigate();

  return (
    <div style={{ marginBottom: 30 }}>
      {/* Banner Header */}
      <h3 style={{ 
        marginBottom: 15, 
        fontSize: "24px", 
        color: "#1e1e1e", 
        paddingLeft: "20px" 
      }}>
        Featured Collections 🐾
      </h3>
   
      <div style={{
        display: "flex",
        gap: 15, 
        overflowX: "scroll", 
        padding: "10px 20px", 
        msOverflowStyle: "none",  
        scrollbarWidth: "none",  
        WebkitOverflowScrolling: "touch", 
      }}>
        {categories.map(c => (
          <CategoryCard key={c.name} category={c} nav={nav} />
        ))}
      </div>
      
 
      <hr style={{ border: "none", borderTop: "1px solid #eeeeee", marginTop: 20 }} />
    </div>
  );
}
