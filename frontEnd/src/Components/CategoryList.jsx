import CategoryCard from "./CategoryCard";

const categories = [
    {name: "a", color: "green"},
    {name: "a", color: "green"},
]

const CategoryList = () => {
    return (
        <div>
            {categories.map((category) => (
                <CategoryCard key={category.name} category={category} />
            ))}
        </div>
    )
}

export default CategoryList;