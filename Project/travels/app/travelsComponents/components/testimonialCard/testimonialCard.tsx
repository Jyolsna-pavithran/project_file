import styles from './testimonialCard.module.scss'

interface TestimonialCardProps {
  imageSrc: string;
  // heading: string;
  // subHeading: string;
  // content: string;
}

function TestimonialCard({ imageSrc }: TestimonialCardProps) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt="Holiday" />
      </div>
      {/* <div className={styles.textContainer}>
        <h6>{heading}</h6>
        <h6>{subHeading}</h6>
        <h6>{content}</h6>
      </div> */}
    </div>
  );
}

export default TestimonialCard;
