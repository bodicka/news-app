import { formatTimeAgo } from "../../helpers/formatTime";
import Image from "../Image/Image";
import styles from "./styles.module.css";

const NewsBaner = ({ item }) => {
  return (
    <div className={styles.baner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
    </div>
  )
};


export default NewsBaner;