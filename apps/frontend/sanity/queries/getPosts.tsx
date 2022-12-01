import groq from 'groq'

const GetPosts = groq`
*[_type == "post"] {
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

export default GetPosts;