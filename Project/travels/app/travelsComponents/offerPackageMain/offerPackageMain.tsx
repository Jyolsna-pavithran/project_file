import OfferPackageCard from "../components/offerPackageCard/offerPackageCard";
import style from './offerPackageMain.module.scss'

function OffersPackageMain() {
    return (
        <div className={style.offersWrapper}>
    
           <OfferPackageCard 
                imageSrc ="/offer-3.svg"  
                heading ="Deal Of the Day"  
                smallHeading="Plan your next trip" 
                rightHeading="AED 4335"
            />

           <OfferPackageCard 
                imageSrc ="/offer-4.svg"  
                heading ="Luxury Packages"  
                smallHeading="Plan your next trip" 
                rightHeading="ADE 6547"
            />
            <OfferPackageCard 
                imageSrc ="/offer-5.svg"  
                heading ="Best Seller Packages"  
                smallHeading="Plan your next trip" 
                rightHeading="ADE 8743"
            />
        
        </div>
    );
}

export default OffersPackageMain;
