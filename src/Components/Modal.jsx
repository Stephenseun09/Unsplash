import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClick}></div>
      <div className={classes.modal}>
        <span className={classes.close} onClick={props.onClick}>
          <i class="fas fa-times"></i>
        </span>
        <img className={classes.image} src={props.src} alt="" />
        <div className={classes.image_caption}>
          <p className={classes.user_name}>{props.userName}</p>
          <p className={classes.user_location}>{props.userLocation}</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
