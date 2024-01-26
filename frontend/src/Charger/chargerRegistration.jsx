import React, { useState } from 'react';
import './chargerRegistration.css';
import 'animate.css';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import axios from 'axios';

const generateUniqueId = () => {
  return `charger_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
};

const ChargerRegistration = () => {
  const [formData, setFormData] = useState({
    uniqueId: generateUniqueId(),
    dockNumber: '',
    chargerStatus: '',
    pricePerWatt: '',
    currentType: '',
    chargerType: '',
    chargerTimingFrom: '',
    chargerTimingTo: '',
    available24hrs: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/chargerRegistration', formData);
      if (response.status === 200) {
        console.log('User created successfully');
      } else {
        console.error('Failed to create user');
      }
    } catch (error) {
      console.error('Error creating user:', error, '', formData);
    }
  };

  return (
    <div className="charger-registration animate__animated animate__fadeIn">
      <h2 className="animate__animated animate__bounceInDown">Charger Registration</h2>
      <form onSubmit={handleSubmit} className="animate__animated animate__fadeIn">
        <div className="form-group">
          <label htmlFor="uniqueId">Unique ID:</label>
          <input type="text" id="uniqueId" name="uniqueId" value={formData.uniqueId} readOnly />
        </div>

        <div className="form-group">
          <label htmlFor="dockNumber">Dock Number:</label>
          <input
            type="text"
            id="dockNumber"
            name="dockNumber"
            value={formData.dockNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="chargerStatus">Charger Status:</label>
          <input
            type="text"
            id="chargerStatus"
            name="chargerStatus"
            value={formData.chargerStatus}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="pricePerWatt">Price Per Watt:</label>
          <input
            type="number"
            id="pricePerWatt"
            name="pricePerWatt"
            value={formData.pricePerWatt}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="currentType">Current Type:</label>
          <input
            type="text"
            id="currentType"
            name="currentType"
            value={formData.currentType}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="chargerType">Charger Type:</label>
          <input
            type="text"
            id="chargerType"
            name="chargerType"
            value={formData.chargerType}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="available24hrs">Available for 24hrs:</label>
          <input
            type="checkbox"
            id="available24hrs"
            name="available24hrs"
            checked={formData.available24hrs}
            onChange={handleInputChange}
          />
        </div>

        {!formData.available24hrs && (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="form-group">
              <label htmlFor="chargerTiming">Charger Timing:</label>
              <div className="time-picker-container">
                <span className="timepicker">
                  <TimePicker
                    label="FROM"
                    value={formData.chargerTimingFrom}
                    onChange={(time) => setFormData({ ...formData, chargerTimingFrom: time })}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </span>
                <TimePicker
                  label="TO"
                  value={formData.chargerTimingTo}
                  onChange={(time) => setFormData({ ...formData, chargerTimingTo: time })}
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>
            </div>
          </LocalizationProvider>
        )}

        <div className="form-group">
          <center>
            <button className="button" type="submit">Register Charger</button>
          </center>
        </div>
      </form>
    </div>
  );
};

export default ChargerRegistration;