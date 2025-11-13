import  { useState, useEffect } from "react";
import { motion } from "framer-motion";
import InputField from "../components/addList/InputField";
import SelectField from "../components/addList/SelectField";
import TextAreaField from "../components/addList/TextAreaField";
import useAuth from "../hooks/useAuth";
import API from "../hooks/useAxios";
import toast from "react-hot-toast";


const categories = ["Pets", "Pet Food", "Accessories", "Care Products"];




export default function AddListing() {
  const { user } =  useAuth();
  const [form, setForm] = useState({
    name: "", category: "Pets", Price: 0, location: "", description: "", image: "", date: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => { document.title = "PawMart — Add Listing"; }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ 
      ...prev, 
      [name]: name === "Price" ? Number(value) : value 
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const payload = { ...form, email: user.email };
      const res = await API.post("/api/listings/add", payload);

      if(res.data.success){
        toast.success("Listing added successfully!");
        setForm({ name: "", category: "Pets", Price: 0, location: "", description: "", image: "", date: "" });
      }

    } catch (err) {
      console.error(err)
      toast.error("Failed to add listing. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '16px 32px', fontFamily: 'Inter, sans-serif' }}>
      
      {/* Plain Css for Tailwind isnt working */}
      <style>
        {`
          /* General Styles */
          .form-card {
            width: 100%;
            max-width: 900px;
            background-color: #fff;
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            border: 1px solid #f3f4f6;
          }

          /* Input Field Base */
          .input-field {
            width: 100%;
            padding: 10px 16px;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            box-sizing: border-box; 
          }
          .input-field:focus {
            outline: none;
            border-color: #4f46e5; /* Indigo 600 */
            box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.3);
          }

          /* Form Sections - Responsive Grid */
          .grid-container {
            display: grid;
            gap: 24px; 
          }
          .details-section {
            background-color: #eef2ff; /* Indigo 50 */
            padding: 16px;
            border-radius: 12px;
            
            /* Responsive Grid setup */
            grid-template-columns: 1fr; /* Default on mobile (small screens) */
          }
          @media (min-width: 768px) {
            .details-section {
              grid-template-columns: 1fr 1fr; /* Two columns on desktop */
            }
          }
          .items-end {
            align-items: flex-end;
          }
          
          /* Submission Button */
          .submit-button {
            width: 100%;
            padding: 12px;
            margin-top: 16px;
            border-radius: 8px;
            font-size: 18px;
            font-weight: 600;
            transition: all 0.2s;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
          }
          .submit-button:not(:disabled) {
            background-color: #4f46e5; /* Indigo 600 */
            color: #fff;
          }
          .submit-button:not(:disabled):hover {
            background-color: #4338ca; /* Indigo 700 */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
          }
          .submit-button:disabled {
            background-color: #a5b4fc; /* Indigo 300 */
            color: #e0e7ff; /* Indigo 100 */
            cursor: not-allowed;
          }

          /* Spinner animation */
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          .spinner {
            animation: spin 1s linear infinite;
          }
        `}
      </style>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="form-card"
      >
        <h2 style={{ fontSize: '30px', fontWeight: '800', marginBottom: '24px', color: '#3730a3', borderBottom: '4px solid #e0e7ff', paddingBottom: '12px' }}>
          Create New Listing
        </h2>
        <form onSubmit={submit} className="grid-container">
          
          {/* Section Product  */}
          <div className="grid-container details-section">
            <InputField 
              label="Product/Pet Name"
              name="name" 
              placeholder="e.g., Persian Kitten or Premium Dog Food" 
              value={form.name} 
              onChange={handleChange} 
              required 
            />
            <SelectField 
              label="Category"
              name="category"
              options={categories}
              value={form.category} 
              onChange={handleChange} 
            />
            <InputField 
              label="Price (or 0 for Adoption)"
              name="Price"
              type="number" 
              placeholder="0.00" 
              value={form.Price} 
              onChange={handleChange} 
              required 
            />
            <InputField 
              label="Location (City/Region)"
              name="location"
              placeholder="e.g., London, UK" 
              value={form.location} 
              onChange={handleChange} 
              required 
            />
          </div>

          {/*  Description and Media */}
          <div className="grid-container">
            <TextAreaField 
              label="Detailed Description"
              name="description"
              placeholder="Describe your pet or product in detail..." 
              value={form.description} 
              onChange={handleChange}
              required
            />
            <InputField 
              label="Image URL"
              name="image"
              placeholder="Paste a link to your image (e.g., https://example.com/pet.jpg)" 
              value={form.image} 
              onChange={handleChange} 
            />
          </div>

          {/*Optional Details Submission */}
          <div className="grid-container details-section items-end">
            <InputField 
              label="Available Date (Optional)"
              name="date"
              type="date" 
              value={form.date} 
              onChange={handleChange} 
            />
            
            {/* User Email */}
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: '500', color: '#4b5563', marginBottom: '4px' }}>Publisher Email</label>
              <input 
                className="input-field" 
                style={{ backgroundColor: '#f3f4f6', color: '#6b7280', cursor: 'not-allowed' }}
                value={user.email} 
                readOnly 
              />
            </div>
          </div>
          
          {/* Submi Btn */}
          <motion.button 
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg className="spinner" style={{ marginRight: '12px', height: '20px', width: '20px', color: '#fff' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Adding...
              </span>
            ) : "Add Listing"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}