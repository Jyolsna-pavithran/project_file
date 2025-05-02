import style from './aboutUs.module.scss';

function AboutUs() {
  return (
    <section className={style.aboutUs}>
      <div className={style.introSection}>
        <div>
          <img  src="/ab-1.svg" alt="Holiday" />
        </div>
 
      </div>

      <div className={style.detailsSection}>
        <div className={style.paragraphWrapper}>
          <p>
            Visas are issued solely at the discretion of the respective Governments, and we cannot guarantee their approval. 
            Please note that we are not affiliated with any government agency. You have the option to apply for visas directly 
            through the official Government websites or by visiting the relevant Embassy or Consulate. Applying through 
            these official channels does not incur any service fees from us.
          </p>
          <p style={{marginTop:"20px"}}><b >Subscribe to our newsletter for exclusive travel deals, insider tips, and inspiring destinations—delivered 
            straight to your inbox!</b></p>

         <div style={{marginTop:"20px"}}>
          <img  src="/dis-1.svg" alt="Holiday" />
        </div>
        </div>

      </div>
    </section>
  );
}

export default AboutUs;
