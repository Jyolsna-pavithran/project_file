import styles from './header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['header-left']}>
        <img src="/logo.svg" alt="Logo" className={styles['header-logo']} />
       
      </div>
      <div className={styles['header-right']}>
      <nav className={styles['header-nav']}>
          <a href="#home" className={styles['header-link']}>Home</a>
          <a href="#about" className={styles['header-link']}>About</a>
          <a href="#about-us" className={styles['header-link']}>Holiday</a>
          <a href="#about-us" className={styles['header-link']}>Visa</a>
          <a href="#about-us" className={styles['header-link']}>City Tours</a>
          <a href="#about-us" className={styles['header-link']}>Offers</a>
          <a href="#about-us" className={styles['header-link']}>Blogs</a>
      
        </nav>
        <button className={styles['contact-button']}>Contact</button>
      </div>
    </header>
  );
}

export default Header;







