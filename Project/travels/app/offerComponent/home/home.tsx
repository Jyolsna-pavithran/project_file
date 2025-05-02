import Faq from "@/app/travelsComponents/faq/faq";
import Header from "@/app/travelsComponents/header/header";
import style from './home.module.scss'
import Footer from "../footer1/footer1";
import Banner from "../banner/banner";
import AboutUs from "../aboutUs/aboutUs";
import SubBanner from "../subBanner/subBanner";

function OffersTravels() {
    return (
      <div>
        <div><Header /></div>
        <div><Banner /></div>
        <div><SubBanner /></div>
        <div><Faq /></div>
        <div><AboutUs /></div>
        <div><Footer /></div>
       

      </div>
    );
  }
  
  export default OffersTravels; 
  