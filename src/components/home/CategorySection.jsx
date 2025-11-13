import React from "react";
import { useNavigate } from "react-router-dom";


const categories = [
  // Double the categories for a better scrolling demonstration
  { name: "Pets", emoji: "🐶" },
  { name: "Pet Food", emoji: "🍖" },
  { name: "Accessories", emoji: "🧸" },
  { name: "Pet Care Products", emoji: "🧸" },
  // Duplicates to fill the slide

];

// --- Styles for a Wide Banner Look ---

// Base style for the category card (Pill Badge style from previous example)
const categoryCardStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px", 
  padding: "12px 25px", // Increased padding for a chunkier banner look
  cursor: "pointer",
  backgroundColor: "#ffffff", // Clean white background
  borderRadius: "50px", // Fully rounded pill shape
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)", // Prominent shadow
  transition: "all 0.3s ease-in-out", 
  minWidth: "150px", // Ensure cards are wide enough to look like banner elements
  flexShrink: 0, // Crucial: Prevents items from shrinking in the flex container
};

// Hover effect
const categoryCardHoverStyle = {
  backgroundColor: "#fff7e6", // Light yellow background on hover
  border: "2px solid #ff9900", // Gold/Orange border for highlight
  transform: "scale(1.05)", // Noticeable pop-out
  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
};

// Emoji and Text Styles
const emojiStyle = { fontSize: "24px" };
const nameTextStyle = { fontWeight: 700, fontSize: "16px", color: "#333" };


// --- Category Card Component (handles state and styling) ---
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

// --- Main Component: The Category Banner ---
export default function CategorySection() {
  const nav = useNavigate();

  return (
    <div style={{ marginBottom: 30 }}>
      {/* Banner Header */}
      <h3 style={{ 
        marginBottom: 15, 
        fontSize: "24px", 
        color: "#1e1e1e", 
        paddingLeft: "20px" // Align header with the content scroll area
      }}>
        Featured Collections 🐾
      </h3>
      
      {/* The Sliding Banner Container */}
      <div style={{
        display: "flex",
        gap: 15, // Spacing between categories
        overflowX: "scroll", // Enables the horizontal sliding behavior
        padding: "10px 20px", // Horizontal padding for spacing from screen edges
        // Optional: Hide the scrollbar for a cleaner look (requires CSS or styled-components normally)
        msOverflowStyle: "none",  /* IE and Edge */
        scrollbarWidth: "none",   /* Firefox */
        WebkitOverflowScrolling: "touch", // Improves scrolling on iOS devices
      }}>
        {categories.map(c => (
          <CategoryCard key={c.name} category={c} nav={nav} />
        ))}
      </div>
      
      {/* Adding a visual separator/footer line */}
      <hr style={{ border: "none", borderTop: "1px solid #eeeeee", marginTop: 20 }} />
    </div>
  );
}