import styles from './offersCard.module.scss';

interface OfficersCardProps {
  imageSrc: string;
  heading: string;
  subHeading: string;
  content: string;
}

function OfficersCard({ imageSrc, heading, subHeading, content }: OfficersCardProps) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt="Holiday" />
      </div>
      <div className={styles.textContainer}>
        <h6>{heading}</h6>
        <h6>{subHeading}</h6>
        <h6>{content}</h6>
        <button className={styles.contactButton}>Book Now</button>
      </div>
    </div>
  );
}

export default OfficersCard;
