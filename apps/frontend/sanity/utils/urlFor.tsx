import createImageUrlBuilder from "@sanity/image-url"
import client from "../client";

const urlFor = (source: String) => (
        createImageUrlBuilder(client).image(source)
)

export default urlFor;