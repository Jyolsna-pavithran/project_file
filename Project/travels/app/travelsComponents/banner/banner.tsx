import styles from './banner.module.scss';

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}>
        <h1 className={styles.heading}>
          Discover the World with Citron Tours, <br /> Your Journey Begins Here
        </h1>
        <div className={styles.textContainer}>
          <p className={styles.text1}>5000+</p>
          <p className={styles.text2}>Happy Customers</p>
          <button className={styles.button}>Enquire</button>
        </div>

        {/* Move the imageContainer here to display images below the text */}
        <div className={styles.imageContainer}>
          <img src='/banner-1.svg' alt='image1' className={styles.image} />
          <img src='/banner-2.svg' alt='image2' className={styles.image} />
          <img src='/banner-3.svg' alt='image3' className={styles.image} />
          <img src='/banner-4.svg' alt='image4' className={styles.image} />
        </div>

        {/* Optional: Image Group */}
        <div className={styles.whiteBox}>
          <div className={styles.imageGroup}>
            <div className={styles.circle}>

              <img src='/banner-5.svg' alt='hellooooo 1' className={styles.circleImage} />
              <p className={styles.imageName}>Holiday</p> 
            </div>
            <div className={styles.circle}>
              <img src='/banner-6.svg' alt='hellooooo 2' className={styles.circleImage} />
              <p className={styles.imageName}>Visa</p>
            </div>
            <div className={styles.circle}>
              <img src='/banner-7.svg' alt='hellooooo 3' className={styles.circleImage} />
              <p className={styles.imageName}>City Tours</p>
            </div>
            <div className={styles.circle}>
              <img src='/banner-8.svg' alt='hellooooo 4' className={styles.circleImage} />
              <p className={styles.imageName}>Offers</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Banner;
