import { useEffect } from "react";
import NewsBaner from "../../components/NewsBaner/NewsBaner";
import styles from "./styles.module.css";
import { getCategories, getNews } from "../../api/apiNews";
import { useState } from "react";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Paginate from "../../components/Paginet/Paginate";
import Categories from "../../components/Categories/Categories";

const Main = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategoties] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 10;
  const pageSize = 10;

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true);
      const response = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategories === "All" ? null : selectedCategories,
      });
      setNews(response.news);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategoris = async () => {
    try {
      const response = await getCategories();
      setCategoties(["All", ...response.categories]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchCategoris();
  }, []);

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategories]);

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const hadlePreviosPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className={styles.main}>
      <Categories
        categories={categories}
        setSelectedCategories={setSelectedCategories}
        selectedCategories={selectedCategories}
      />
      {news.length > 0 && !isLoading ? (
        <NewsBaner item={news[1]} />
      ) : (
        <Skeleton type={"baner"} count={1} />
      )}

      <Paginate
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        hadlePreviosPage={hadlePreviosPage}
        totalPages={totalPage}
        currentPage={currentPage}
      />

      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={10} type={"item"} />
      )}

      <Paginate
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        hadlePreviosPage={hadlePreviosPage}
        totalPages={totalPage}
        currentPage={currentPage}
      />
    </main>
  );
};
export default Main;
