import React from 'react';

const LogingPageStyle = () => {
    return (
        <style>
        {`
          .login-container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 40px 20px;
            min-height: calc(100vh - 100px); /* Adjust height for full-screen view */
          }
          .login-card {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            max-width: 420px;
            width: 100%;
            transition: transform 0.3s ease;
          }
          .login-card:hover {
            transform: translateY(-2px);
          }
          .login-title {
            font-size: 2rem;
            font-weight: 700;
            color: #34495e; /* Dark text */
            margin-bottom: 20px;
            text-align: center;
          }
          .input-group {
            display: grid;
            gap: 15px;
            margin-bottom: 20px;
          }
          .login-input {
            width: 100%;
            padding: 12px;
            border: 1px solid #bdc3c7;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.3s, box-shadow 0.3s;
          }
          .login-input:focus {
            border-color: #3498db;
            box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
            outline: none;
          }
          .login-btn {
            padding: 12px 20px;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s, opacity 0.3s;
            text-align: center;
          }
          .primary-btn {
            background-color: #3498db; /* Primary color */
            color: #ffffff;
          }
          .primary-btn:hover:not(:disabled) {
            background-color: #2980b9;
          }
          .google-btn {
            background-color: #ffffff;
            color: #34495e;
            border: 2px solid #bdc3c7;
            margin-top: 10px;
          }
          .google-btn:hover:not(:disabled) {
            background-color: #f8f8f8;
            border-color: #3498db;
          }
          .disabled-btn {
            opacity: 0.6;
            cursor: not-allowed;
          }
          .register-link {
            text-align: center;
            margin-top: 20px;
            font-size: 0.95rem;
          }
          .register-link a {
            color: #3498db;
            text-decoration: none;
            font-weight: 600;
          }
          .register-link a:hover {
            text-decoration: underline;
          }
        `}
      </style>
    );
};

export default LogingPageStyle;