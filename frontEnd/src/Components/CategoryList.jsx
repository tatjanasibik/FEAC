import CategoryCard from "./CategoryCard";
import Angelai from "../../public/categories/Angelai.jpg";
import Gyvunai from "../../public/categories/Gyvunai.jpg";
import Miestai from "../../public/categories/Miestai.jpg";
import Natiurmortai from "../../public/categories/Natiurmortai.jpg";
import Peizazai from "../../public/categories/Peizazai.jpg";
import Zmones from "../../public/categories/Zmones.jpg";
import styles from "../Components/CategoryList.module.css";


const categories = [
    {name: "Angelai", img: Angelai, color: ""},
    {name: "Gyvunai", img: Gyvunai, color: ""},
    {name: "Miestai", img: Miestai, color: ""},
    {name: "Natiurmortai", img: Natiurmortai, color: ""},
    {name: "Peizazai", img: Peizazai, color: ""},
    {name: "Zmones", img: Zmones, color: ""},
]

const CategoryList = () => {
    return (
        <div className={styles.container}>
            {categories.map((category) => (
                <CategoryCard key={category.name} category={category} />
            ))}
        </div>
    )
}

export default CategoryList;