import ChooseUsCard from "../components/chooseUsCard/chooseUsCard";
import style from './chooseUs.module.scss'

function ChooseUs() {
    return (

        <div className={style.offerMainWrapper}>
           <div>
             <div className={style.heading}>Why Choose us</div>  
             <h2><b> Your Trusted Partner in Curating Unforgettable <br /> Travel Experiences</b></h2>
           </div>

           <div className={style.offersWrapper}>
           <ChooseUsCard  
                description=
                "Enjoy top-notch travel services at unbeatable rates. We prioritize offering the best value for your dream journeys without compromising quality." 
                title="Competitive Pricing" 
                icon="/choose-1.svg" 
           />

            <ChooseUsCard  
                description=
                "Enjoy top-notch travel services at unbeatable rates. We prioritize offering the best value for your dream journeys without compromising quality." 
                title="Expert Assistance" 
                icon="/choose-2.svg" 
           />

            <ChooseUsCard  
                description=
                "Enjoy top-notch travel services at unbeatable rates. We prioritize offering the best value for your dream journeys without compromising quality." 
                title="Worldwide Coverage" 
                icon="/choose-3.svg" 
           />
           
        </div>
        </div>

    );
}

export default ChooseUs;

    

