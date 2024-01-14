// XDirectionModal.js
import React from 'react';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/system';

const Backdrop = styled('div')`
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const DetailModel = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      components={{
        Backdrop: Backdrop,
      }}
      BackdropProps={{
        sx: { backdropFilter: 'blur(4px)' },
      }}
    >
      <Slide direction="left" in={open} mountOnEnter unmountOnExit>
        <Paper sx={{ width: 400, padding: 3 }}>
          {/* Modal content goes here */}
          <h2 id="transition-modal-title">X Direction Modal</h2>
          <p id="transition-modal-description">Modal content...</p>
        </Paper>
      </Slide>
    </Modal>
  );
};

export default DetailModel;
