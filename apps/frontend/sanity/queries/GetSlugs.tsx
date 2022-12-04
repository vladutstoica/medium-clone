import groq from "groq";

const GetSlugs = groq`
*[_type == "post"] {
    _id,
    slug {
        current
    }
}
`

export default GetSlugs;