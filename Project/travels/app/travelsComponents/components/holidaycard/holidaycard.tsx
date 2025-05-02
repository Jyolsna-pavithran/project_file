import styles from './holidaycard.module.scss';

interface HolidayCardProps {
  imageSrc: any ;
  heading: any;
}

function HolidayCard({ imageSrc, heading }: HolidayCardProps) {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt="Holiday" className={styles.image} />
      <h6 className={styles.overlayText}>{heading}</h6>
    </div>
  );
}

export default HolidayCard;
