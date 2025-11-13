import React from 'react';

const Style = () => {
    return (
       <style>
        {`
          .footer-container {
            width: 80%;
            margin-top: 40px;
          }
          .footer-content {
            width: 100%;
            margin: 0 auto;
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;
            gap: 30px;
          }
          .footer-section {
            flex: 1;
            min-width: 200px;
            padding: 10px 0;
          }
          .footer-section h4 {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 15px;
            color: #3498db; /* Accent color for headings */
            border-bottom: 2px solid #3498db;
            padding-bottom: 5px;
            display: inline-block;
          }
          .footer-section p {
            font-size: 0.9rem;
            line-height: 1.5;
            margin-bottom: 15px;
          }
          .footer-links a {
            display: block;
            color: #ecf0f1;
            text-decoration: none;
            margin-bottom: 8px;
            transition: color 0.3s ease;
            font-size: 0.95rem;
          }
          .footer-links a:hover {
            color: #3498db;
            text-decoration: underline;
          }
          .footer-bottom {
            max-width: 1200px;
            margin: 20px auto 0;
            padding: 15px 20px 0;
            border-top: 1px solid #3d556c;
            text-align: center;
            font-size: 0.8rem;
            color: #bdc3c7;
          }

          @media (max-width: 768px) {
            .footer-content {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            .footer-section {
              min-width: 100%;
            }
            .footer-section h4 {
              border-bottom: none;
            }
          }
        `}
      </style>
    );
};

export default Style;