import { forwardRef } from "react";
import styles from "./styles.module.css";

const Categories = forwardRef(
  ({ categories, setSelectedCategories, selectedCategories }, ref) => {
    return (
      <div ref={ref} className={styles.categories}>
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
  }
);

Categories.displayName = "Categories";

export default Categories;
