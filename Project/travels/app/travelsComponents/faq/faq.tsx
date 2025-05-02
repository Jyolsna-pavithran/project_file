import Accordian from "../components/accordian/accordian";
import style from './faq.module.scss'

function Faq() {
    return (

        <div className={style.faqWrapper} style={{textAlign:"left"}}>
           <div style={{marginLeft:"30px"}}>
                <div className={style.heading}>Faq</div>  
                <h2><b>Frequently Asked Questions</b></h2>
            </div>
        <div className={style.accordian} style={{textAlign:"left"}}>
            <Accordian  />
            <Accordian  />
            <Accordian  />
            <Accordian  /> 
        </div>
        </div>

    );
}

export default Faq;
