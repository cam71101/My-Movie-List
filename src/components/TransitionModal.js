import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.main,
    outline: 0,
    zIndex: 4000,
  },
}));

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
