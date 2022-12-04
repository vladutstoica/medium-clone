import groq from "groq";

const GetCategories = groq`
*[_type == "category"][0..9] {
    _id,
    title,
    description,
}
`

export default GetCategories;