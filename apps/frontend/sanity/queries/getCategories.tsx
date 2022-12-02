import groq from "groq";

const getCategories = groq`
*[_type == "category"][0..9] {
    _id,
    title,
    description,
}
`

export default getCategories;