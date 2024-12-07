import { getCategories } from "../../api/apiNews";
import { useTheme } from "../../context/ThemeContext";
import { useFetch } from "../../helpers/hooks/useFetch";
import { CategoriesApiResponse, IFilters } from "../../interfase/interfase";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./styles.module.css";

interface Props {
  filter: IFilters;
  changeFilter: (key: string, value: string | null | number) => void; 
}

const NewsFilters = ({ filter, changeFilter }: Props) => {
  const { isDark } = useTheme();
  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(getCategories);

  return (
    <div className={styles.filter}>
      {dataCategories ? (
        <Slider isDark={isDark}>
          <Categories
            categories={dataCategories.categories}
            selectedCategories={filter.category}
            setSelectedCategories={(category) =>
              changeFilter("category", category)
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filter.keyword}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
};

export default NewsFilters;
