import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  p: 4,
};

export default function CargaModal({ handleClose, open }) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
        <Grid container
          justify="center"
          alignItems="center"
          spacing={2}>
          <CircularProgress />
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
