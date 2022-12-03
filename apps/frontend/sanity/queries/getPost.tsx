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
    },
    "comments": *[
      _type == "comment" &&
      post._ref == ^._id &&
      approved == true
    ] | order(_createdAt desc)
}
`

export default GetPost;