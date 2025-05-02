import AboutUs from "../aboutUs/aboutUs";
import Banner from "../banner/banner";
import Blogs from "../blogs/blogs";
import ChooseUs from "../chooseUs/chooseUs";
import Faq from "../faq/faq";
import Footer from "../footer/footer";
import Header from "../header/header";
import Holidays from "../holidays/holidays";
import OffersPackageMain from "../offerPackageMain/offerPackageMain";
import Offers from "../offers/offers";
import Testimonial from "../testimonial/testimonial";

function HomeTravels() {
    return (
      <div>
        <div><Header /></div>
        <div><Banner /></div>
        <div><Holidays /></div>
        <div><AboutUs /></div>
        <div><Offers /></div>
        <div><OffersPackageMain /></div>
        <div><ChooseUs /></div>
        <div><Testimonial /></div>
        <div><Blogs /></div>
        <div><Faq /></div>
        <div><Footer /></div>
      </div>
    );
  }
  
  export default HomeTravels; 
  