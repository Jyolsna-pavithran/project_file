import style from './chooseUsCard.module.scss';

interface ChooseUsCardProps {
  icon: string;
  title: string;
  description: any;
}

function ChooseUsCard({ icon, title, description }: ChooseUsCardProps) {
  return (
    <div className={style.card}>
      <div className={style.iconWrapper}>
        <img src={icon} alt={title} className={style.icon} />
      </div>
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>
    </div>
  );
}

export default ChooseUsCard;
