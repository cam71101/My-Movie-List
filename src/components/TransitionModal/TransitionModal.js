import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import useStyles from './transitionModalStyles';

const style = {
  zIndex: 4000,
};

function TransitionsModal(props) {
  const classes = useStyles();
  return (
    <div className={classes.rootModal}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.modal}
        onClose={props.close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={style}
      >
        <Fade in={props.modal}>
          <span className={classes.spanModal}>{props.children}</span>
        </Fade>
      </Modal>
    </div>
  );
}

export default TransitionsModal;
