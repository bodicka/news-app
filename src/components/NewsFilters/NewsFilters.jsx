import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import styles from "./styles.module.css";

const NewsFilters = ({ filter, changeFilter }) => {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={styles.filter}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          selectedCategories={filter.category}
          setSelectedCategories={(category) =>
            changeFilter("category", category)
          }
        />
      ) : null}

      <Search
        keywords={filter.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
};

export default NewsFilters;
