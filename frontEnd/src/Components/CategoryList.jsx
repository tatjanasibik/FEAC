import CategoryCard from "./CategoryCard";
import Angelai from "../../public/categories/Angelai.jpg";
import Gyvunai from "../../public/categories/Gyvunai.jpg";
import Miestai from "../../public/categories/Miestai.jpg";
import Natiurmortai from "../../public/categories/Natiurmortai.jpg";
import Peizazai from "../../public/categories/Peizazai.jpg";
import Zmones from "../../public/categories/Zmones.jpg";
import styles from "../Components/CategoryList.module.css";


const categories = [
    {name: "Peizažai", img: Peizazai, color: ""},
    {name: "Natiurmortai", img: Natiurmortai, color: ""},
    {name: "Angelai", img: Angelai, color: ""},
    {name: "Miestai", img: Miestai, color: ""},
    {name: "Žmonės", img: Zmones, color: ""},
    {name: "Gyvūnai", img: Gyvunai, color: ""},  
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