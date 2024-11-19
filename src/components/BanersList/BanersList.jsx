import withSkeleton from "../../helpers/hocs/withSkeleton";
import NewsBaner from "../NewsBaner/NewsBaner";
import styles from "./styles.module.css";

const BanersList = ({ banners }) => {
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

const BannersListWithSkeleton = withSkeleton(BanersList, 'baner', 10, 'row');

export default BannersListWithSkeleton