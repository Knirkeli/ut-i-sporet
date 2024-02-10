export default {
    name: "blog",
    type: "document",
    title: "Blog",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Blog name",
        },
        {
            name: "images",
            type: "array",
            title: "Blog images",
            of: [{type: "image"}],
        },
        {
            name: "blogtext",
            type: "text",
            title: "Description of former courses",
        },
        {
        name: "slug",
        type: "slug",
        title: "course Slug",
        },
        {
            name: "category",
            title: "Category",
            type: "reference",
            to: [{type: "category"}],
        }
    ]
}