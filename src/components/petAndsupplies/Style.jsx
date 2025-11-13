import React from 'react';

const Style = () => {
    return (
         <style>
        {`
          .filter-wrapper {
            max-width: 1200px;
            margin: 20px auto;
            padding: 15px 20px;
            background-color: #f8f9fa; /* Light background */
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          }
          .filters-group {
            display: flex;
            gap: 15px;
            align-items: center;
          }
          .filter-input {
            flex-grow: 1;
            padding: 12px 15px;
            border: 1px solid #ced4da;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.3s, box-shadow 0.3s;
          }
          .filter-select {
            padding: 12px 15px;
            border: 1px solid #ced4da;
            border-radius: 8px;
            font-size: 1rem;
            background-color: #ffffff;
            cursor: pointer;
            min-width: 180px;
            transition: border-color 0.3s, box-shadow 0.3s;
          }
          .filter-input:focus, .filter-select:focus {
            border-color: #3498db;
            box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
            outline: none;
          }

          /* Responsive adjustments for mobile */
          @media (max-width: 640px) {
            .filters-group {
              flex-direction: column;
              gap: 10px;
            }
            .filter-input, .filter-select {
              width: 100%;
              min-width: unset;
            }
          }
        `}
      </style>

    );
};

export default Style;