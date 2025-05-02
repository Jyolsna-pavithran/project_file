import style from './aboutUs.module.scss';

function AboutUs() {
  return (
    <section className={style.aboutUs}>
      <div className={style.introSection}>
        <h5 className={style.smallHeading}>About Us</h5>
        <h1 className={style.mainHeading}>
          Your Trusted Partner in Curating Unforgettable <br /> Travel Experiences
        </h1>
          <button className={style.contactButton}>Know More</button>
      </div>

      <div className={style.detailsSection}>
        <div className={style.paragraphWrapper}>
          <p>
          Founded in 2015, Citron Tourism is a Destination Management Company based 
          in UAE licensed by the Government of Dubai’s Department of Tourism and Commerce 
           Marketing (DTCM). We’re on a journey to transform ordinary trips into extraordinary ones.
           We are your guide, bringing you personal experiences. Wherever your travels take you,
           we’ll show you the unique and unmissable things to do in your destination. With Citron 
            Tourism on your side (and in your pocket), creating memorable 
          </p>
        </div>

        <div className={style.statsWrapper}>
          <div className={style.statBox}>
            <div className={style.statNumber}>25k+</div>
            <div className={style.statLabel}>Happy travelers</div> 
          </div>
          <div className={style.statBox}>
            <div className={style.statNumber}>4.8/5</div>
            <div className={style.statLabel}>Rating on google</div>
          </div>
          <div className={style.statBox}>
            <div className={style.statNumber}>10+</div>
            <div className={style.statLabel}>years of experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
