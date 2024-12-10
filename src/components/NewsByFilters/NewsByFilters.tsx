import { TOTAL_PAGES } from "../../constant/constants";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "../../store";
import { useGetNewsApiQuery } from "../../store/servises/newsApi";
import { setFilters } from "../../store/slices/newsSlice";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import PaginateWrapper from "../PaginateWrapper/PaginateWrapper";
import styles from "./styles.module.css";

const NewsByFilters = () => {
  const dispatch = useAppDispatch();

  const filter = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const deboncedKeywords = useDebounce(filter.keyword, 1500);

  const { isLoading } = useGetNewsApiQuery({
    ...filter,
    keyword: deboncedKeywords,
  });

  const handleNextPage = () => { 
    if (filter.page_number < TOTAL_PAGES) {
      dispatch(
        setFilters({ key: "page_number", value: filter.page_number + 1 })
      );
    }
  };

  const hadlePreviosPage = () => {
    if (filter.page_number > 1) {
      dispatch(
        setFilters({ key: "page_number", value: filter.page_number - 1 })
      );
    }
  };

  const handlePageClick = (pageNumber: number) => {
    dispatch(setFilters({ key: "page_number", value: pageNumber }));
  };

  return (
    <section className={styles.section}>
      <NewsFilters filter={filter} />
      <PaginateWrapper
        top
        bottom
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        hadlePreviosPage={hadlePreviosPage}
        totalPages={TOTAL_PAGES}
        currentPage={filter.page_number}
      >
        <NewsList isLoading={isLoading} news={news} />
      </PaginateWrapper>
    </section>
  );
};

export default NewsByFilters;
