import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, Paper, Popover, Slide, Stack, TextField, useMediaQuery, useTheme } from '@mui/material';
import './ChargerList.css'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

export default function ChargerCard({ key }) {
  const theme = useTheme();
  const currentTime = dayjs().add(30, 'minutes');
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [appointmentTime, setAppointmentTime] = React.useState(dayjs().add(30, 'minutes'));

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleBookAppointment = () => {
    // Perform actions to book the appointment, for example, make an API call.
    console.log('Appointment booked for time:', appointmentTime);
    handlePopoverClose();
  };

  const handleTimeChangeFrom = (time) => {
    // Extract hours and minutes from the dayjs object
    const hours = time.hour();
    const minutes = time.minute();
    
    // Convert the selected time to 12-hour format
    const hours12hr = (hours % 12) || 12;
    const period = hours < 12 ? 'AM' : 'PM';
    const time12hr = `${hours12hr}:${String(minutes).padStart(2, '0')} ${period}`;
    
    setAppointmentTime(time12hr);
  };
  
  const open = Boolean(anchorEl);

  // React.useEffect(() => {
  //   // Set default value to current time + 30 minutes using dayjs
  //   const currentTime = dayjs().add(30, 'minutes');
  //   setAppointmentTime(currentTime.toDate()); // Convert to JavaScript Date object
  // }, []);
  
  return (
    <div>
      
      <Card  id={`${key}`} onClick={handlePopoverOpen} sx={{
          maxWidth: isSmallScreen ? '100%' : 290,
          flexBasis: isSmallScreen ? '5%' : 'calc(25% - 15px)',
          borderRadius: '7px',
          height: '260px',
          width: '290px',
          marginBottom: '15px',
        }} 
        style={{ margin: '10px'}}
        
        >
        <CardActionArea>
        <Stack direction="row" spacing={1} style={{ position: 'absolute', top: 7, left: 10, zIndex: 2 }}>
            <Chip label="Available" color="success" sx={{ fontSize: '12px', padding: '-3px' }} onClick={handlePopoverOpen}/>
          </Stack>
          <CardMedia
            component="img"
            height="120"
            image="https://media.gettyimages.com/id/155148505/photo/electric-car.jpg?s=612x612&w=gi&k=20&c=DqmTuHjGDAd0xyllJdC3TZdoIJyc3k4VKu2XYORnng0="
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom  component="div">
              Charging Dock
            </Typography>
            <Typography gutterBottom  style={{ color: 'green' }} component="div">
              1000 Rs
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Has smart digital shifter.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>

        </CardActions>
      </Card>



      <Popover
        id="mouse-over-popover"
        // sx={{
        //   pointerEvents: 'none',
        // }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        
      >
        <div>
        <Paper style={{ padding: '20px', width: '300px' }}>
          <Typography variant="body1"><strong>Unique ID:</strong> charger_101</Typography>
          <Typography variant="body1"><strong>Dock Number:</strong> 1</Typography>
          <Typography variant="body1"><strong>Charger Status:</strong> Available</Typography>
          <Typography variant="body1"><strong>Price Per Watt:</strong> 10</Typography>
          <Typography variant="body1"><strong>Current Type:</strong> AC</Typography>
          <Typography variant="body1"><strong>Charger Type:</strong> Type 2</Typography>
          <Typography variant="body1"><strong>Charger Timing:</strong> 10 am to 10 pm</Typography>
          <Typography variant="body1"><strong>Available 24hrs:</strong> Yes</Typography> 

          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box mt={2} >
                <TimePicker
                  label="Appointment Time"
                  value={appointmentTime ? appointmentTime : '10:00:00'}
                  onChange={(time) => handleTimeChangeFrom(time)}
                  defaultValue={dayjs('2022-04-17T15:30')}                />
          </Box>
          </LocalizationProvider>
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button variant="contained" color="primary" onClick={handleBookAppointment}>
              Book
            </Button>
            <Button variant="outlined" color="secondary" onClick={handlePopoverClose}>
              Cancel
            </Button>
          </Box>
        </Paper>
        </div>
      </Popover>
      {/* <Backdrop open={open} onClick={handlePopoverClose} /> */}



    </div>
  );
}


