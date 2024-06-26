import styles from "./CategoryList.module.css";
import PropTypes from 'prop-types';

const CategoryCard = ({ category }) => {
  const { name, /*icon*/} = category;
//   const Icon = icon;

  return (
    <div className={styles.card}>
      {/* <Icon fontSize={48} color={category.color} /> */}
      <p className={styles.name}>{name}</p>
    </div>
  );
};

CategoryCard.propTypes = {
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      color: PropTypes.string,
    }).isRequired,
  };

export default CategoryCard;