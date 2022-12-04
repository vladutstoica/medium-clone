import groq from 'groq'

const GetTrendingPosts = groq`
*[_type == "post" && trending==true][0..5] {
    _id,
    title,
    description,
    mainImage,
    slug,
    publishedAt,
    trending,
    author -> {
        name,
        image
    }
}
`

export default GetTrendingPosts;