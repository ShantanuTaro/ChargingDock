import { useMediaQuery, useTheme } from '@mui/material';
import './ChargerList.css'
import ChargingDockCard from './ChargerCard';

function ChargerList() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const cardData = [
    { id: 1, title: 'Charging Dock 1', content: 'This is the content of Card 1.' },
    { id: 2, title: 'Charging Dock 2', content: 'This is the content of Card 2.' },
    { id: 3, title: 'Charging Dock 3', content: 'This is the content of Card 3.' },
    { id: 4, title: 'Charging Dock 4', content: 'This is the content of Card 4.' },
    { id: 5, title: 'Charging Dock 5', content: 'This is the content of Card 5.' },

  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px', flexWrap: isSmallScreen ? 'nowrap' : 'wrap' }}>
    {cardData.map((card) => (
      <ChargingDockCard key={card.id} title={card.title} content={card.content} />
    ))}
  </div>
  );
}

export default ChargerList;