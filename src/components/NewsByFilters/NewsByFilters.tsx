import { getNews } from "../../api/apiNews";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constant/constants";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import { NewsApiResponse, ParamsType } from "../../interfase/interfase";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import PaginateWrapper from "../PaginateWrapper/PaginateWrapper";
import styles from "./styles.module.css";

const NewsByFilters = () => {
  const { filter, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keyword: "",
  });

  const deboncedKeywords = useDebounce(filter.keyword, 1500);

  const { data, isLoading } = useFetch<NewsApiResponse, ParamsType>(getNews, {
    ...filter,
    keyword: deboncedKeywords,
  });

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

  const handlePageClick = (pageNumber: number) => {
    changeFilter("page_number", pageNumber);
  };

  return (
    <section className={styles.section}>
      <NewsFilters filter={filter} changeFilter={changeFilter} />
      <PaginateWrapper
        top
        bottom
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        hadlePreviosPage={hadlePreviosPage}
        totalPages={TOTAL_PAGES}
        currentPage={filter.page_number}
      >
        <NewsList isLoading={isLoading} news={data?.news} />
      </PaginateWrapper>
    </section>
  );
};

export default NewsByFilters;
