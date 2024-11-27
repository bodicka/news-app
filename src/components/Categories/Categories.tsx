import { ForwardedRef, forwardRef } from "react";
import styles from "./styles.module.css";
import { CategoriesTypes } from "../../interfase/interfase";

interface Props {
  categories: CategoriesTypes[];
  setSelectedCategories: (category: CategoriesTypes | null) => void;
  selectedCategories: CategoriesTypes | null;
}

const Categories = forwardRef(
  (
    { categories, setSelectedCategories, selectedCategories }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
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
