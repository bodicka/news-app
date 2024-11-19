import { TOTAL_PAGES } from "../../constant/constants"
import NewsFilters from "../NewsFilters/NewsFilters"
import NewsList from "../NewsList/NewsList"
import Paginate from "../Paginet/Paginate"
import styles from "./styles.module.css"

const NewsByFilters = ({ filter, changeFilter, isLoading, news }) => {

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
    <section className={styles.section}>
      <NewsFilters filter={filter} changeFilter={changeFilter} />

      <Paginate
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        hadlePreviosPage={hadlePreviosPage}
        totalPages={TOTAL_PAGES}
        currentPage={filter.page_number}
      />

      <NewsList isLoading={isLoading} news={news} />

      <Paginate
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        hadlePreviosPage={hadlePreviosPage}
        totalPages={TOTAL_PAGES}
        currentPage={filter.page_number}
      />
    </section>
  )
}

export default NewsByFilters