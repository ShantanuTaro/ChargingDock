import axios from "axios";
import React, { useEffect, useState } from "react";
import '../Charger/ChargerList.css'
import ChargingDockCard from '../Charger/ChargerCard';
import { useMediaQuery, useTheme } from '@mui/material';
import AgentChargerCard from "./AgentDockCard";


const AgentDockRegistration = ({ count }) => {
  const [charger, setCharger] = useState([{}]);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  useEffect(() => {
    const newCharger = [];
    for (let i = 0; i < count; i++) {
      newCharger.push({ id: i + 1, title: "Add New Card" });
    }
    setCharger(newCharger);
  }, [count]);

  console.log("charger", charger);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px', flexWrap: isSmallScreen ? 'nowrap' : 'wrap' }}>
      {charger.map((card) => (
        <div><AgentChargerCard key={card.id} title={card.title}  /></div>
      ))}
    </div>
  );
};

export default AgentDockRegistration;
