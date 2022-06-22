export default {
    name: "category",
    title: "Category",
    type: "document",
    fields: [
    {
        name: 'title',
        title: 'Title',
        type: 'string',
    },
    {
        name: 'description',
        title: 'Description',
        type: 'text',
    },
    {
        name: "slug",
        title: "Slug",
        type: "slug"
    }, {
        name: "thumbnail",
        title: "Thumbnail",
        type: "image"
    }, {
        name: "details",
        title: "Details",
        type: "array",
        of: [{ type: "string" }]
    }]
}