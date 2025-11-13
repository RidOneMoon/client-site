import React from 'react';

const Style = () => {
    return  <style>{`
        /* --- Base Container & Wrapper --- */
        .orders-page-wrapper {
            max-width: 1000px;
            margin: 40px auto;
            padding: 20px;
            font-family: 'Inter', sans-serif;
        }
        @media (max-width: 768px) {
            .orders-page-wrapper {
                margin: 20px auto;
                padding: 10px;
            }
        }

        .orders-card {
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            padding: 30px;
        }
        @media (max-width: 768px) {
            .orders-card {
                padding: 20px;
            }
        }

        .orders-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
            flex-wrap: wrap;
            gap: 15px;
        }

        .orders-title {
            font-size: 32px;
            font-weight: 700;
            color: #1f2937;
        }

        /* --- Loading State --- */
        .loading-indicator {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 400px;
            font-size: 18px;
            color: #4b5563;
        }

        .spinner {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #4f46e5; /* Primary Color: Indigo */
            border-radius: 50%;
            width: 30px;
            height: 30px;
            animation: spin 1s linear infinite;
            margin-right: 10px;
        }
        @keyframes spin {
            to { transform: rotate(360deg); }
        }


        /* --- Download Button --- */
        .download-btn {
            padding: 10px 20px;
            background-color: #10b981; /* Primary Action Color: Green */
            color: white;
            font-weight: 600;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.2s, box-shadow 0.2s;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
        }

        .download-btn:hover {
            background-color: #059669; 
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
        }

        .download-icon {
            margin-right: 8px;
            width: 18px;
            height: 18px;
            fill: none;
            stroke: currentColor;
        }

        /* --- Orders Table --- */
        .orders-table-wrapper {
            overflow-x: auto;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
        }

        .orders-table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            font-size: 14px;
            min-width: 600px; /* Ensures decent width on desktop */
        }

        .orders-table th, .orders-table td {
            padding: 12px 16px;
            text-align: left;
            border-bottom: 1px solid #e5e7eb;
        }

        .orders-table thead {
            background-color: #f9fafb;
        }

        .orders-table th {
            font-weight: 600;
            color: #4b5563;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 0.05em;
        }

        .orders-table tbody tr:hover {
            background-color: #f3f4f6;
            transition: background-color 0.15s;
        }

        .orders-table tbody tr:last-child td {
            border-bottom: none;
        }

        /* Mobile Responsive Table (Data Labels) */
        @media (max-width: 600px) {
            .orders-table {
                border: 0;
                min-width: auto;
            }
            .orders-table thead {
                display: none;
            }
            .orders-table tr {
                display: block;
                margin-bottom: 15px;
                border: 1px solid #e5e7eb;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            }
            .orders-table td {
                display: block;
                text-align: right;
                font-size: 16px;
                border-bottom: 1px solid #f3f4f6;
                padding: 10px 15px;
            }
            .orders-table td:before {
                content: attr(data-label);
                float: left;
                font-weight: 600;
                text-transform: uppercase;
                color: #4f46e5;
                font-size: 12px;
            }
            .orders-table tbody tr:hover {
                background-color: #ffffff; /* Disable hover background on mobile cards */
            }
        }

        /* --- Empty State --- */
        .empty-orders-message {
            text-align: center;
            padding: 50px 20px;
            color: #6b7280;
            font-size: 16px;
            border: 1px dashed #d1d5db;
            border-radius: 8px;
            margin-top: 20px;
            background-color: #f9fafb;
        }
      `}</style>
};

export default Style;