import styles from "./styles.module.css";

const Skeleton = ({ count = 1, type = "baner" }) => {
  return (
    <>
      {count > 1 ? (
        <ul className={styles.list}>
          {[...Array(count)].map((_, index) => (
            <li
              key={index}
              className={type === "baner" ? styles.baner : styles.item}
            ></li>
          ))}
        </ul>
      ) : (
        <li className={type === "baner" ? styles.baner : styles.item}></li>
      )}
    </>
  );
};

export default Skeleton;
