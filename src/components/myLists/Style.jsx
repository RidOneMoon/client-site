import React from 'react';

const Style = () => {
    return (
        <style>{`
        .listings-page-wrapper { max-width: 1000px; margin: 40px auto; padding: 20px; font-family: 'Inter', sans-serif; }
        .listings-title { font-size: 32px; font-weight: 700; color: #1f2937; margin-bottom: 20px; }
        .loading-indicator { display: flex; justify-content: center; align-items: center; min-height: 300px; font-size: 18px; color: #4b5563; }
        .spinner { border: 4px solid #f3f3f3; border-top: 4px solid #4f46e5; border-radius: 50%; width: 30px; height: 30px; animation: spin 1s linear infinite; margin-right: 10px; }
        @keyframes spin { to { transform: rotate(360deg); } }

        .table-wrapper { overflow-x: auto; border: 1px solid #e5e7eb; border-radius: 8px; }
        .listings-table { width: 100%; border-collapse: collapse; min-width: 600px; }
        .listings-table th, .listings-table td { padding: 12px 16px; text-align: left; border-bottom: 1px solid #e5e7eb; }
        .listings-table thead { background-color: #f9fafb; }
        .listings-table th { font-weight: 600; color: #4b5563; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em; }
        .listings-table tbody tr:hover { background-color: #f3f4f6; transition: background-color 0.15s; }
        .listing-table-image { width: 80px; height: 50px; object-fit: cover; border-radius: 4px; }

        .table-btn { padding: 6px 12px; border-radius: 6px; font-weight: 500; cursor: pointer; margin-right: 5px; border: none; }
        .view-btn { background-color: #4f46e5; color: white; }
        .view-btn:hover { background-color: #3730a3; }
        .delete-btn { background-color: #ef4444; color: white; }
        .delete-btn:hover { background-color: #dc2626; }
        .delete-btn:disabled { background-color: #fca5a5; cursor: not-allowed; }

        .empty-listings-message { text-align: center; padding: 50px 20px; color: #6b7280; font-size: 16px; border: 1px dashed #d1d5db; border-radius: 8px; margin-top: 20px; }

        .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; z-index: 1000; }
        .modal-content { background-color: white; padding: 30px; border-radius: 12px; width: 90%; max-width: 400px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
        .modal-title { font-size: 24px; font-weight: 700; color: #dc2626; margin-bottom: 15px; }
        .modal-message { font-size: 16px; color: #4b5563; margin-bottom: 25px; }
        .modal-actions { display: flex; justify-content: flex-end; gap: 10px; }
        .modal-btn { padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer; border: none; transition: background-color 0.2s; }
        .cancel-btn { background-color: #e5e7eb; color: #374151; } .cancel-btn:hover { background-color: #d1d5db; }
        .confirm-delete-btn { background-color: #ef4444; color: white; } .confirm-delete-btn:hover { background-color: #dc2626; } .confirm-delete-btn:disabled { background-color: #fca5a5; cursor: not-allowed; }
      `}</style>
    );
};

export default Style;