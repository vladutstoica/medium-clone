import groq from "groq";

const GetPost = groq`
*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    description,
    mainImage,
    slug,
    publishedAt,
    author -> {
        name,
        image
    }
}
`

export default GetPost;