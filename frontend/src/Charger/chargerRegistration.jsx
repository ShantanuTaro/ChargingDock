// ChargerRegistration.js
import React, { useEffect, useState } from 'react';
import './chargerRegistration.css';
import 'animate.css';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import  { convertTo12HourFormat } from '../Common/time24hr'

const generateUniqueId = () => {
  // Generate a unique ID using timestamp and random number
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
    chargerTimingFrom: '', // Use an object to store FROM and TO times
    chargerTimingTo:'',
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

      [name]: fieldValue,
      ...formData
    });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, formData); //work on this/........

      if (response.status === 200) {
        console.log('User created successfully');
      } else {
        console.error('Failed to create user');
      }
    } catch (error) {
      console.error('Error creating user:', error,'',formData);
    }
    // Clear form fields after submission
    // setFormData({
    //   uniqueId: generateUniqueId(),
    //   dockNumber: '',
    //   chargerStatus: '',
    //   pricePerWatt: '',
    //   currentType: '',
    //   chargerType: '',
    //   chargerTiming: { from: null, to: null }, // Use an object to store FROM and TO times
    //   available24hrs: false,
    // })

    console.log(formData);
    console.log('formData.chargerTimingFrom',formData.chargerTimingFrom);
  };


  return (
    <div className={`charger-registration animate__animated animate__fadeIn`}>
      <h2 className="animate__animated animate__bounceInDown">Charger Registration</h2>
      <form onSubmit={handleSubmit} className="animate__animated animate__fadeIn">
        <div className="form-group">
          <label className='label' htmlFor="uniqueId">Unique ID:</label>
          <input
            type="text"
            className='input'
            id="uniqueId"
            name="uniqueId"
            value={formData.uniqueId}
            required
            readOnly
          />
        </div>

        <div className="form-group">
          <label className='label' htmlFor="dockNumber">Dock Number:</label>
          <input
            type="text"
            className='input'
            id="dockNumber"
            name="dockNumber"
            value={formData.dockNumber}
            onChange={(e) => setFormData({ ...formData, dockNumber: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          {/* <label id="demo-select-small-label" className='label' htmlFor="chargerType">Charger Type:</label> */}
          {/* <label className='label' htmlFor="chargerType">Charger Type:</label> */}
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

        <div className="form-group ">
          <span >
            <TextField
              id="outlined-number"
              label="pricePerWatt"
              type="number"
              onChange={(e) => setFormData({ ...formData, pricePerWatt: e.target.value })}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ width: '100%' }}
            />
          </span>
        </div>


        <div className="form-group">
          <FormControl sx={{ minWidth: '100%', marginBottom: '5px' }} size="small" >
            <InputLabel id="demo-select-small-label" >Current Type</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="currentType"
              label="Current Type"
              value={formData.currentType}
              onChange={(e) => setFormData({ ...formData, currentType: e.target.value })}
              required
            >
              <MenuItem value="AC">AC</MenuItem>
              <MenuItem value="DC">DC</MenuItem>
            </Select>
          </FormControl>
        </div>


        <div className="form-group">
          <FormControl sx={{ minWidth: '100%', marginBottom: '5px' }} size="small" >
            <InputLabel id="demo-select-small-label" >Charger Type</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="chargerType"
              value={formData.chargerType}
              label="Charger Type"
              onChange={(e) => setFormData({ ...formData, chargerType: e.target.value })}
            >
              <MenuItem value="Type 2">Type 2</MenuItem>
              <MenuItem value="CCS - Type 2">CCS - Type 2</MenuItem>
            </Select>
          </FormControl>
        </div>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
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
        </LocalizationProvider>

        <div className="form-group">
          <label htmlFor="available24hrs" style={{ marginRight: '10px' }}>Available for 24hrs:</label>
          <span>
            <input
              type="checkbox"
              id="available24hrs"
              name="available24hrs"
              checked={formData.available24hrs}
              onChange={(e) => setFormData({ ...formData, available24hrs: e.target.value })}
            />
          </span>
        </div>
        <center>
        <button className='button' type="submit">Register Charger</button>
        </center>
      </form>
    </div>
  );
};

export default ChargerRegistration;
