import * as React from 'react';
import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { changeModalState } from '../../redux/actions';
import AuthForm from '../ModalForm/ModalForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function BasicModal() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.auth.isModalOpen);
  const modalType = useSelector((state) => state.auth.modalType);
  const isAuth = modalType === 'signup';

  const handleClose = () => dispatch(changeModalState(false));

  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {isAuth ? 'SIGN UP' : 'LOGIN'}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <AuthForm />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default memo(BasicModal);
