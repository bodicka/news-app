import withSkeleton from "../../helpers/hocs/withSkeleton";
import { INews } from "../../interfase/interfase";
import NewsBaner from "../NewsBaner/NewsBaner";
import styles from "./styles.module.css";

interface Props {
  banners?: INews[] | null;
};

const BanersList = ({ banners }: Props) => {
  return (
    <ul className={styles.banners}>
      {banners?.map(banner => {
        return( 
          <NewsBaner key={banner.id} item={banner}  />
        )
      })}
    </ul> 
  )
}

const BannersListWithSkeleton = withSkeleton<Props>(BanersList, 'baner', 10, 'row');

export default BannersListWithSkeleton