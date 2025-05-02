import styles from './blogsCard.module.scss'

interface BlogsCardProps {
  imageSrc: string;
  heading: string;
  subHeading: string;
  content: string;
}

function BlogsCard({ imageSrc, heading, subHeading, content }: BlogsCardProps) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt="Holiday" />
      </div>
      <div className={styles.textContainer}>
        <h6 style={{fontSize:"25px", fontWeight:"bold" ,lineHeight:"30px"}}>{heading}</h6>
        <h6 style={{marginTop:"10px", fontSize:"15px", color: " #6C757D" , marginBottom: "10px"}}>{subHeading}</h6>
        <h6 style={{color:" #6C757D" , fontSize:"13px"}}>{content}</h6>
      </div>
    </div>
  );
}

export default BlogsCard;
