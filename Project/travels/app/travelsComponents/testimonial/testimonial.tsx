import TestimonialCard from "../components/testimonialCard/testimonialCard";
import style from './testimonial.module.scss'

function Testimonial() {
    return (

        <div className={style.mainTestimonial}>
        <div style={{marginLeft:"30px"}}>
        <div className={style.heading}>Testimonials</div>  
        <h2><b> Our customer reviews</b></h2>
      </div>
        <div className={style.offersWrapper}>
            <TestimonialCard
                imageSrc="/tresim-1.svg" 
         
            />
            <TestimonialCard
                imageSrc="/tresim-1.svg" 
            />
    
            <TestimonialCard
               imageSrc="/tresim-1.svg"              
         
            />
            
            <TestimonialCard
                 imageSrc="/tresim-1.svg" 
       

            />
        </div>
        </div>

    );
}

export default Testimonial;
