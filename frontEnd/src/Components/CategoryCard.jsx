import styles from "./CategoryList.module.css";
import PropTypes from 'prop-types';

const CategoryCard = ({ category }) => {
  const {name, img} = category;

  return (
    <div className={styles.card}>
      <img src={img} alt={name} className={styles.image} />
      <p className={styles.name}>{name}</p>
    </div>
  );
};

CategoryCard.propTypes = {
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string,
    }).isRequired,
  };

export default CategoryCard;