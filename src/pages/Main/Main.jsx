import NewsBaner from "../../components/NewsBaner/NewsBaner";
import styles from "./styles.module.css";
import { getCategories, getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import Paginate from "../../components/Paginet/Paginate";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constant/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";

const Main = () => {
  const {filter, changeFilter} = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const deboncedKeywords = useDebounce(filter.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filter,
    keywords: deboncedKeywords,
  });

  const { data: dataCategories } = useFetch(getCategories);

  const handleNextPage = () => {
    if (filter.page_number < TOTAL_PAGES) {
      changeFilter("page_number", filter.page_number + 1);
    }
  };

  const hadlePreviosPage = () => {
    if (filter.page_number > 1) {
      changeFilter("page_number", filter.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilter("page_number", pageNumber);
  };

  return (
    <main className={styles.main}>
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

      <NewsBaner
        isLoading={isLoading}
        item={data && data.news && data.news[0]}
      />

      <Paginate
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        hadlePreviosPage={hadlePreviosPage}
        totalPages={TOTAL_PAGES}
        currentPage={filter.page_number}
      />

      <NewsList isLoading={isLoading} news={data?.news} />

      <Paginate
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        hadlePreviosPage={hadlePreviosPage}
        totalPages={TOTAL_PAGES}
        currentPage={filter.page_number}
      />
    </main>
  );
};
export default Main;
