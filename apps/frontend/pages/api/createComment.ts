// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import client from 'sanity/client'

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { _id, name, message } = JSON.parse(req.body)

    client.create({
        _type: "comment",
        post: {
            _type: "reference",
            _ref: _id
        },
        name: name,
        message: message
    }).then(() => {
        return res.status(500).json({ message: "Comment submitted." })
    }).catch((err) => {
        res.status(200).json({ message: "Couldn't submit the comment.", err })
    })
}
