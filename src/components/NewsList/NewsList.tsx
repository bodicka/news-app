import withSkeleton from "../../helpers/hocs/withSkeleton";
import { INews } from "../../interfase/interfase";
import NewsItems from "../NewsItems/NewsItems";
import styles from "./styles.module.css";

interface Props {
  news?: INews[];
};

const NewsList = ({ news }: Props) => {
  return (
    <ul className={styles.list}>
      {news?.map((items) => {
        return <NewsItems key={items.id} item={items} />;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10)

export default NewsListWithSkeleton;
