import { formatTimeAgo } from "../../helpers/formatTime";
import { INews } from "../../interfase/interfase";
import Image from "../Image/Image";
import styles from "./styles.module.css";

interface Props {
  item: INews;
}

const NewsBaner = ({ item }: Props) => {
  return (
    <div className={styles.baner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
    </div>
  )
};


export default NewsBaner;