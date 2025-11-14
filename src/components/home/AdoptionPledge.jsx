export default function AdoptionPledge() {
  return (
    <div className="adoption-pledge-container"
    style={{
      padding: "40px 0",
      marginTop: "40px"
    }}
    >
      <div className="pledge-content">
        <h3 className="pledge-title">Why Adopt from PawMart?</h3>
        <p className="pledge-text">
          Adopting saves lives and provides second chances for animals in need. By choosing adoption, you make a profound difference in a pet's life and gain a loving companion.
        </p>
      </div>

      {/* my tailwind dont work for why added the plain css */}
      <style>{`
        .adoption-pledge-container {
          margin-top: 32px;
      
          background-color: #eef4ff; 
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06);
          border: 1px solid #d1e0ff;
          font-family: 'Inter', sans-serif;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
        }
        
        .pledge-title {
          font-size: 24px; /* text-2xl */
          font-weight: 700; /* font-bold */
          color: #4338ca; /* Indigo 700 */
          margin-bottom: 8px; /* mb-2 */
        }

        .pledge-text {
          font-size: 16px;
          color: #4b5563; /* Gray 600 */
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.5;
        }

        /* Responsive adjustments */
        @media (min-width: 768px) {
          .pledge-title {
            font-size: 30px;
          }
        }
      `}</style>
    </div>
  );
}
