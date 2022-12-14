import styles from "./index.module.scss";

const ImageCard = (props: any) => {
  return (
    <div className="col-auto mb-4">
      <div
        className={`${styles.imagecard__img} ${
          props.itemDisabled ? styles.imagecard_disabled : null
        }`}
        onClick={props.handleCardClick}
      >
        <img className="img-fluid" src={props.imgsrc} />
        <span className={styles.imagecard__count}>{props.itemno}</span>
      </div>
    </div>
  );
};

export default ImageCard;
