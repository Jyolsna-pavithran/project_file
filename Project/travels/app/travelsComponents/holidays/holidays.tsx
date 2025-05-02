import HolidayCard from '../components/holidaycard/holidaycard';
import styles from './holidays.module.scss'

function Holidays() {
    return (
      <div className={styles.holidayCardWrapper}>
           <HolidayCard imageSrc ="/hd-1.svg"  heading ="USA"  />
           <HolidayCard imageSrc ="/hd-2.svg"  heading ="Salalah"  />
           <HolidayCard imageSrc ="/hd-3.svg"  heading ="Thailand"  />
           <HolidayCard imageSrc ="/hd-3.svg"  heading ="Armenia"  />
      </div>
    );
  }
  
  export default Holidays; 
  