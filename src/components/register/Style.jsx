import React from 'react';

const RegisterPageStyle = () => {
    return (
        <style>
        {`
          .register-container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 40px 20px;
            min-height: calc(100vh - 100px); /* Adjust height for full-screen view */
          }
          .register-card {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            max-width: 420px;
            width: 100%;
            transition: transform 0.3s ease;
          }
          .register-card:hover {
            transform: translateY(-2px);
          }
          .register-title {
            font-size: 2rem;
            font-weight: 700;
            color: #34495e;
            margin-bottom: 20px;
            text-align: center;
          }
          .input-group {
            display: grid;
            gap: 15px;
            margin-bottom: 20px;
          }
          .register-input {
            width: 100%;
            padding: 12px;
            border: 1px solid #bdc3c7;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.3s, box-shadow 0.3s;
          }
          .register-input:focus {
            border-color: #3498db;
            box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
            outline: none;
          }
          .register-btn {
            padding: 12px 20px;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s, opacity 0.3s;
            text-align: center;
            background-color: #3498db; /* Primary color */
            color: #ffffff;
          }
          .register-btn:hover:not(:disabled) {
            background-color: #2980b9;
          }
          .disabled-btn {
            opacity: 0.6;
            cursor: not-allowed;
          }
          .login-link {
            text-align: center;
            margin-top: 20px;
            font-size: 0.95rem;
          }
          .login-link a {
            color: #3498db;
            text-decoration: none;
            font-weight: 600;
          }
          .login-link a:hover {
            text-decoration: underline;
          }
          .password-hint {
            font-size: 0.85rem;
            color: #7f8c8d;
            margin-top: -10px;
            margin-bottom: 10px;
            text-align: center;
          }
        `}
      </style>
    );
};

export default RegisterPageStyle;