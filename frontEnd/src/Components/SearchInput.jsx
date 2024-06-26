import styles from "./SearchInput.module.css";

const SearchInput = ({ ...props }) => {
  return (
    <input className={styles.searchInput} placeholder="Paieška" {...props} />
  );
};

export default SearchInput;