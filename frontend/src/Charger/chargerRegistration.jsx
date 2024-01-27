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
  
  const handleTimeChangeFrom = ( time) => {
    const time24hr = new Date(`${time}`).toLocaleTimeString('en-US', { hour12: false });
    // Copy the current formData
    const [hours, minutes] = time24hr.split(':');
    // Convert the hours to 12-hour format
    const hours12hr = (hours % 12) || 12;
    // Determine whether it's AM or PM
    const period = hours < 12 ? 'AM' : 'PM';
    // Create the 12-hour time string
    const time12hr = `${hours12hr}:${minutes} ${period}`;    convertTo12HourFormat(time24hr)

    setFormData({
      ...formData,
      chargerTimingFrom:time12hr
    });
  };

  const handleTimeChangeTo = ( time) => {
    const time24hr = new Date(`${time}`).toLocaleTimeString('en-US', { hour12: false });

    // Copy the current formData
    const [hours, minutes] = time24hr.split(':');

    // Convert the hours to 12-hour format
    const hours12hr = (hours % 12) || 12;

    // Determine whether it's AM or PM
    const period = hours < 12 ? 'AM' : 'PM';

    // Create the 12-hour time string
    const time12hr = `${hours12hr}:${minutes} ${period}`;    convertTo12HourFormat(time24hr)
    
    // Set the updated formData state
    setFormData({
      ...formData,
      chargerTimingTo:time12hr
    });
  };

  const url = 'http://localhost:3000/chargerRegistration';

  const handleChange = (e) => {
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
        console.log('User created successfully',formData);
      } else {
        console.error('Failed to create user');
      }
    } catch (error) {
      console.error('Error creating user:', error, '', formData);
    }
  };

// let count =true
// // condition1 && condition2
// console.log('count',!count);

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
          <FormControl sx={{ minWidth: '100%', marginBottom: '5px' }} size="small" >
            <InputLabel id="demo-select-small-label" >Charger Status</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="chargerStatus"
              label="Charger Status"
              value={formData.chargerStatus}
              onChange={(e) => setFormData({ ...formData, chargerStatus: e.target.value })}
              required
            >
              <MenuItem value="Available">Available</MenuItem>
              <MenuItem value="Closed">Closed</MenuItem>
              <MenuItem value="Undermaintenance">Undermaintenance</MenuItem>
            </Select>
          </FormControl>
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

        <div className="form-group">
          <label htmlFor="available24hrs" style={{ marginRight: '10px' }}>Available for 24hrs:</label>
          <span>
            <input
              type="checkbox"
              id="available24hrs"
              name="available24hrs"
              checked={formData.available24hrs}
              onClick={(e) => setFormData({ ...formData, available24hrs: !formData.available24hrs})}
            />
          </span>
        </div>

        {(!formData.available24hrs) && (<LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="form-group">
            <label className='label' htmlFor="chargerType">Charger Timing:</label>
            <div className="time-picker-container">
              <span className='timepicker'>
                <TimePicker
                  label="FROM"
                  value={formData.chargerTimingFrom}
                  onChange={(time) => handleTimeChangeFrom(time)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </span>
              <TimePicker
                label="TO"
                value={formData.chargerTimingTo}
                onChange={(time) => handleTimeChangeTo(time)}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
          </div>
        </LocalizationProvider>)}
        <center>
        <button className='button' type="submit">Register Charger</button>
        </center>
      </form>
    </div>
  );
};

export default ChargerRegistration;