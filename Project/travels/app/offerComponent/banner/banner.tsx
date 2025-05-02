import styles from './banner.module.scss';

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}>
        <h1 className={styles.heading}>
            Offers
        </h1>


      </div>
    </div>
  );
}

export default Banner;
