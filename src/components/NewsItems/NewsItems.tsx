import { formatTimeAgo } from "../../helpers/formatTime";
import { INews } from "../../interfase/interfase";
import styles from "./styles.module.css";

interface Props {
  item: INews;
}

const NewsItems = ({ item }: Props) => {
  return (
    <li className={styles.item}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extar}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsItems;
