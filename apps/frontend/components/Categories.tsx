import { Category } from "sanity/_types/typings";

interface Props {
    categories: [Category]
}

const Categories = ({ categories }: Props) => {
    return (
        <div className="order-1 lg:order-2 lg:max-w-md border-b-2">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <h3 className="font-bold text-xs uppercase">DISCOVER MORE OF WHAT MATTERS TO YOU</h3>

                <div className="flex flex-wrap gap-2 mt-4">
                    {categories.map((category) => (
                        <div key={category._id} className="border-2 border-neutral-100 rounded-sm">
                            <span className="block px-6 py-2 font-light text-xs text-neutral-500">{category.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Categories;