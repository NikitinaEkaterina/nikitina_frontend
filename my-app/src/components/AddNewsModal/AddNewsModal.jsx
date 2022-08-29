import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { toggleAddNewsModal } from '../../redux/actions';
import UserNews from '../UserNews/UserNews';

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

function AddNewsModal() {
  const dispatch = useDispatch();
  const isNewsModalOpen = useSelector((state) => state.news.isNewsModalOpen);
  const handleClose = () => dispatch(toggleAddNewsModal(false));

  return (
    <Modal
      open={isNewsModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <UserNews />
      </Box>
    </Modal>
  );
}

export default memo(AddNewsModal);
