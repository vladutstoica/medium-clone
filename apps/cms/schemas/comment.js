export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        {
            name: 'approved',
            title: 'Approved',
            type: 'boolean'
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'message',
            title: 'Message',
            type: 'string',
        },
        {
            name: 'post',
            type: 'reference',
            to: { type: 'post' },
        },
    ],

}
