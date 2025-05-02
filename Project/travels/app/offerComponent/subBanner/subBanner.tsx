import style from './subBanner.module.scss'

function SubBanner() {
  return (
    <section className={style.aboutUs}>
      
      <div className={style.introSection}>
      <img style={{marginBottom:"20px"}} src="/sub-bn.svg" alt="Holiday" />
        <div>
          <img  src="/sub-bn-2.svg" alt="Holiday" />
        </div>
 
      </div>

      <div className={style.detailsSection}  style={{marginTop:"40px", width:"1250px"}}>
        <div className={style.paragraphWrapper}>
        <p style={{marginTop:"20px", marginBottom:"20px" , fontSize:"25px"}}><b >
           9 Nights in Europe:From Paris to Zurich
        </b></p>

        <div style={{marginTop:"20px", marginBottom:"20px"}}>
          <img  src="/sb-bn-2.svg" alt="Holiday" />
        </div>

          <p>
            Visas are issued solely at the discretion of the respective Governments, and we cannot guarantee their approval. 
            Please note that we are not affiliated with any government agency. You have the option to apply for visas directly 
            through the official Government websites or by visiting the relevant Embassy or Consulate. Applying through 
            these official channels does not incur any service fees from us.
          </p>



        </div>

      </div>
    </section>
  );
}

export default SubBanner;
