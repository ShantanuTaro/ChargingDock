import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, Paper, Popover, Slide, Stack, useMediaQuery, useTheme } from '@mui/material';
import DetailModal from './details';
import './success.css'
import styled from '@emotion/styled';



export default function MultiActionAreaCard({ key }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      
      <Card  id={`${key}`} onClick={handleClickOpen} sx={{
          maxWidth: isSmallScreen ? '100%' : 290,
          flexBasis: isSmallScreen ? '5%' : 'calc(25% - 15px)',
          borderRadius: '7px',
          height: '260px',
          width: '290px',
          marginBottom: '15px',
        }} style={{ margin: '10px'}}>
        <CardActionArea>
        <Stack direction="row" spacing={1} style={{ position: 'absolute', top: 7, left: 10, zIndex: 2 }}>
            <Chip label="Available" color="success" sx={{ fontSize: '12px', padding: '-3px' }} />
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


      <Dialog
        // fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>


    </div>
  );
}