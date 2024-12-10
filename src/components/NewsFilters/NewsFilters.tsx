import { useTheme } from "../../context/ThemeContext";
import { IFilters } from "../../interfase/interfase";
import { useAppDispatch } from "../../store";
import { useGetCategoriesQuery } from "../../store/servises/newsApi";
import { setFilters } from "../../store/slices/newsSlice";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./styles.module.css";

interface Props {
  filter: IFilters;
}

const NewsFilters = ({ filter }: Props) => {
  const dispatch = useAppDispatch();
  const { isDark } = useTheme();
  const { data } = useGetCategoriesQuery(null);

  return (
    <div className={styles.filter}>
      {data ? (
        <Slider isDark={isDark}>
          <Categories
            categories={data.categories}
            selectedCategories={filter.category}
            setSelectedCategories={(category) =>
              dispatch(setFilters({ key: "category", value: category }))
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filter.keyword}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: "keywords", value: keywords }))
        }
      />
    </div>
  );
};

export default NewsFilters;
