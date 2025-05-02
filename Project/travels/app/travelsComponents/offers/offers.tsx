import OfficersCard from "../components/offersCard/offersCard";
import style from './offers.module.scss';

function Offers() {
    return (
        <div className={style.offerMainWrapper}>
            <div className={style.header}><h1><b>Offer</b></h1></div>
        <div className={style.offersWrapper}>
            <OfficersCard 
                imageSrc="/offer-2.svg" 
                heading="Domestic Flights" 
                subHeading="Huge savings on flight with trxvl." 
                content="Book domestic flights starting @ just ₹1459" 
            />
    
            <OfficersCard 
                imageSrc="/offer-2.svg" 
                heading="Domestic Flights" 
                subHeading="Huge savings on flight with trxvl." 
                content="Book domestic flights starting @ just ₹1459" 
            />
            
            <OfficersCard 
                imageSrc="/offer-2.svg" 
                heading="Domestic Flights" 
                subHeading="Huge savings on flight with trxvl." 
                content="Book domestic flights starting @ just ₹1459" 
            />
        </div>
        </div>

    );
}

export default Offers;
