import groq from "groq";

const getCategories = groq`
*[_type == "category"][0..9] {
    title,
}
`

export default getCategories;