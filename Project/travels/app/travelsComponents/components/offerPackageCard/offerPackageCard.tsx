
import styles from './offerPackageCard.module.scss';

interface  OfferPackageCardProps {
  imageSrc: any ;
  heading: any;
  smallHeading: any;
  rightHeading: any;
}

function  OfferPackageCard({ imageSrc, heading,  smallHeading, rightHeading }:  OfferPackageCardProps) {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt="Holiday" className={styles.image} />
      <div>
        <div className={styles.overlayText}>
           <div>
             <div>
                {heading}
             </div>
             <div style={{fontSize : "10px" , fontWeight : "normal", textAlign:"left" , marginTop: "5px"}}>
               {smallHeading}
             </div>
           </div>
           <div>
            <div style={{marginTop : "25px"}}>
              {rightHeading}
            </div>

           </div>
        </div>

      </div>
     
    </div>
  );
}

export default  OfferPackageCard;

