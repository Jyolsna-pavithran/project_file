import style from './footer1.module.scss'

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerColumn1}>
          <p>
          We’re on a journey to transform ordinary trips into extraordinary ones. We are your guide, 
          bringing you personal experiences. Wherever your travels take you, we’ll show you the unique 
          and unmissable things to do in your destination. 
          </p>
      </div>

      <div className={style.footerColumn2}>
        <h3>Explore</h3>
        <a href="#">Home</a><br />
        <a href="#">About Us</a><br />
        <a href="#">Our Service</a><br />
        <a href="#">Offers</a>
        <a href="#">Blogs</a><br />
        <a href="#">Contact</a>
      </div>

      <div className={style.footerColumn3}>
        <h3>Contact</h3>
        <p>Email: contact@example.com</p>
        <p>Phone: +1 (234) 567-890</p>
        <p>Address: 123 Business Ave, City, Country</p>
        <p>Email: contact@example.com</p>

      </div>

      <div className={style.footerColumn4}>
        <p>
          Our mission is to bridge the gap between innovation and user experience, making technology more accessible and impactful.
        </p>
        <img style={{marginTop:"15px"}} src="/footer-1.svg" alt="Holiday" />
        
      </div>
    <div style={{marginTop:"60px"}}>
      <img style={{marginTop:"15px"}} src="/footer-2.svg" alt="Holiday" />
    </div>
     
    </footer>
  );
}

export default Footer;
