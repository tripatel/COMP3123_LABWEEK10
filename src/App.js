import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agree: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="App">
      <h1>Data Entry Form</h1>
      <form onSubmit={handleSubmit} className="data-entry-form">
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} required />
          
          <label>Name</label>
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address1" placeholder="1234 Main St" value={formData.address1} onChange={handleChange} required />

          <label>Address 2</label>
          <input type="text" name="address2" placeholder="Apartment, studio, or floor" value={formData.address2} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>City</label>
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />

          <label>Province</label>
          <select name="province" value={formData.province} onChange={handleChange} required>
            <option value="">Choose...</option>
            <option value="Ontario">Ontario</option>
            <option value="Quebec">Quebec</option>
            <option value="British Columbia">British Columbia</option>
            <option value="Alberta">Alberta</option>
            {/* Add other provinces as needed */}
          </select>

          <label>Postal Code</label>
          <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} required />
        </div>

        <div className="form-group checkbox">
          <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} required />
          <label>Agree Terms & Condition?</label>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Information</h2>
          <p>Email: {submittedData.email}</p>
          <p>Name: {submittedData.fullName}</p>
          <p>Address: {submittedData.address1}</p>
          <p>Address 2: {submittedData.address2}</p>
          <p>City: {submittedData.city}</p>
          <p>Province: {submittedData.province}</p>
          <p>Postal Code: {submittedData.postalCode}</p>
          <p>Agreed to Terms: {submittedData.agree ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
}

export default App;
