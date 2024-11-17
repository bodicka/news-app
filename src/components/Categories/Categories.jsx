import styles from "./styles.module.css";

const Categories = ({
  categories,
  setSelectedCategories,
  selectedCategories,
}) => {
  return (
    <div className={styles.categories}>
      {categories.map((categori) => {
        return (
          <button
            onClick={() => setSelectedCategories(categori)}
            className={
              selectedCategories === categori ? styles.active : styles.item
            }
            key={categori}
          >
            {categori}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
