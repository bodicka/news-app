import styles from "./styles.module.css";

const Categories = ({
  categories,
  setSelectedCategories,
  selectedCategories,
}) => {
  return (
    <div className={styles.categories}>
      <button
        onClick={() => setSelectedCategories(null)}
        className={!selectedCategories ? styles.active : styles.item}
      >
        All
      </button>
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
