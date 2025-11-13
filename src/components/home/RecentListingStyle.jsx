
const RecentListingStyle = () => {
    return (
        <style>{`
        /* --- Layout & Typography --- */
        .recent-listings-section {
          width: 100%;
          margin: 40px auto;
          padding: 0 16px;
          font-family: 'Inter', sans-serif;
        }

        .section-title {
          font-size: 32px;
          font-weight: 800;
          color: #1f2937; /* Gray 800 */
          text-align: center;
          margin-bottom: 8px;
        }

        .section-subtitle {
          font-size: 16px;
          color: #6b7280; /* Gray 500 */
          text-align: center;
          margin-bottom: 32px;
        }

        /* --- Grid Container --- */
        .listings-grid {
          display: grid;
          gap: 24px; /* gap-6 */
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        }

        /* --- Card Styles --- */
        .listing-card {
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-xl */
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #e5e7eb;
          display: flex;
          flex-direction: column;
        }

        .listing-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15);
        }

        .card-image-wrapper {
          width: 100%;
          padding-bottom: 75%; /* 4:3 Aspect Ratio */
          position: relative;
        }

        .card-image {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .card-category-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: #4f46e5; /* Indigo 600 */
            color: white;
            padding: 4px 12px;
            border-radius: 9999px;
            font-size: 12px;
            font-weight: 600;
            z-index: 10;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .card-content {
          padding: 16px;
          flex-grow: 1; /* Ensures buttons align at bottom */
          display: flex;
          flex-direction: column;
        }

        .card-name {
          font-size: 20px;
          font-weight: 700;
          color: #111827; /* Gray 900 */
          margin-bottom: 8px;
          line-height: 1.2;
        }

        .card-location {
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #6b7280; /* Gray 500 */
            margin-bottom: 12px;
        }
        .location-icon {
            width: 16px;
            height: 16px;
            color: #9ca3af; /* Gray 400 */
            margin-right: 4px;
        }

        .card-price {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937; /* Gray 800 */
          margin-top: auto; /* Push content up */
          margin-bottom: 16px;
        }

        /* --- Button --- */
        .details-btn {
          width: 100%;
          padding: 10px 16px;
          background-color: #4f46e5; /* Indigo 600 */
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s, transform 0.1s;
        }

        .details-btn:hover {
          background-color: #3730a3; /* Indigo 700 */
        }
        
        .details-btn:active {
          transform: scale(0.99);
        }

        /* --- Loading and Empty States --- */
        .loading-screen-small, .empty-state {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 40px 20px;
            text-align: center;
            font-size: 16px;
            color: #4b5563;
            border-radius: 8px;
            margin: 20px 0;
            background-color: #f9fafb;
        }
        .spinner-small {
            animation: spin 1s linear infinite;
            height: 24px;
            width: 24px;
            color: #4f46e5;
            margin-right: 8px;
        }
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
      `}</style>
    );
};

export default RecentListingStyle;