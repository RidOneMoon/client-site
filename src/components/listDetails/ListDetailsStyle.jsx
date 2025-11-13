import React from 'react';

const ListDetailsStyle = () => {
    return (
         <style>{`
        /* --- Base Styles --- */
        .container-wrapper {
            max-width: 1280px;
            margin: 20px auto; /* Added margin-top/bottom */
            padding: 16px; 
            font-family: 'Inter', sans-serif;
        }

        .listing-card {
            background-color: #ffffff;
            border-radius: 16px; 
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); 
            overflow: hidden;
            border: 1px solid #e5e7eb;
        }

        /* --- Loading State --- */
        .loading-screen {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 80vh; /* Adjusted for better view */
            background-color: #f9fafb;
            color: #4b5563;
            font-size: 18px;
            flex-direction: column;
        }

        .spinner {
            animation: spin 1s linear infinite;
            height: 32px;
            width: 32px;
            color: #4f46e5;
            margin-bottom: 12px;
        }
        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        /* --- Header Section --- */
        .header-section {
            padding: 24px;
            border-bottom: 1px solid #e5e7eb;
            background-color: #f9fafb;
        }
        @media (min-width: 640px) {
            .header-section {
                padding: 40px;
            }
        }

        .category-badge {
            display: inline-flex;
            padding: 4px 12px;
            font-size: 14px;
            font-weight: 500;
            border-radius: 9999px;
            background-color: #eef2ff;
            color: #3730a3;
            margin-bottom: 8px;
        }

        .listing-title {
            font-size: 32px;
            font-weight: 800;
            color: #111827;
            line-height: 1.25;
        }
        @media (min-width: 640px) {
            .listing-title {
                font-size: 40px;
            }
        }

        .listing-price {
            font-size: 24px;
            color: #4f46e5;
            margin-top: 8px;
            font-weight: 700;
        }

        /* --- Main Content Grid --- */
        .content-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 24px;
        }
        @media (min-width: 1024px) {
            .content-grid {
                grid-template-columns: 2fr 1.2fr; /* Slightly wider right column */
                padding: 40px;
            }
        }

        /* --- Image and Description Area (Left/Top) --- */
        .main-content-area {
            display: flex;
            flex-direction: column;
            gap: 32px;
        }

        .listing-image-wrapper {
            width: 100%;
            padding-bottom: 60%; /* 5/3 aspect ratio */
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        .listing-image {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .description-section {
            padding: 24px;
            background-color: #f9fafb;
            border-radius: 12px;
            border: 1px solid #e5e7eb;
            box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.08);
        }
        .description-title {
            font-size: 20px;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 16px;
            border-bottom: 2px solid #e5e7eb;
            padding-bottom: 8px;
        }
        .description-text {
            color: #4b5563;
            line-height: 1.75;
            white-space: pre-wrap;
        }

        .metadata-info {
            font-size: 16px;
            color: #6b7280;
            display: flex;
            flex-direction: column;
            gap: 12px;
            padding-top: 10px;
            border-top: 1px dashed #d1d5db;
        }
        .metadata-info a {
            color: #4f46e5;
            text-decoration: none;
            font-weight: 600;
        }
        .metadata-info a:hover {
            color: #3730a3;
            text-decoration: underline;
        }
        .metadata-info strong {
            color: #1f2937;
        }

        /* --- Order/Adoption Form (Right/Bottom) --- */
        .order-form-card {
            padding: 24px;
            background-color: #eef2ff;
            border-radius: 12px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            border: 2px solid #c7d2fe;
            height: fit-content;
        }

        .order-form-title {
            font-size: 22px;
            font-weight: 800;
            color: #3730a3;
            margin-bottom: 20px;
            border-bottom: 3px solid #a5b4fc;
            padding-bottom: 10px;
            text-align: center;
        }

        .form-field-group {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .input-with-label {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .label-text {
            font-size: 14px;
            font-weight: 600;
            color: #3730a3;
        }

        .form-input {
            width: 100%;
            padding: 12px 16px;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            box-sizing: border-box;
        }
        .form-input:focus {
            outline: none;
            border-color: #4f46e5;
            box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.3);
        }

        .read-only-input {
            background-color: #f3f4f6;
            color: #4b5563;
            cursor: default;
            font-size: 14px;
            padding: 10px 16px;
        }
        .price-display {
            font-weight: 700;
            color: #1f2937;
            border: 1px solid #d1d5db;
            background-color: #ffffff;
        }

        .textarea-input {
            resize: vertical;
        }

        /* --- Submit Button --- */
        .submit-btn {
            width: 100%;
            padding: 14px;
            margin-top: 12px;
            border-radius: 10px;
            font-size: 18px;
            font-weight: 700;
            transition: all 0.2s;
            border: none;
            cursor: pointer;
            box-shadow: 0 6px 8px -3px rgba(0, 0, 0, 0.15);
            background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
            color: #fff;
            text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
        }

        .submit-btn:not(:disabled):hover {
            background: linear-gradient(135deg, #3730a3 0%, #4f46e5 100%);
            transform: translateY(-2px);
            box-shadow: 0 8px 10px -3px rgba(0, 0, 0, 0.2);
        }

        .submit-btn:disabled {
            background: #d1d5db;
            color: #9ca3af;
            cursor: not-allowed;
            box-shadow: none;
        }

        .login-required-message {
            font-size: 14px;
            text-align: center;
            color: #ef4444;
            margin-top: -8px;
            font-weight: 600;
        }
      `}</style>
    );
};

export default ListDetailsStyle;