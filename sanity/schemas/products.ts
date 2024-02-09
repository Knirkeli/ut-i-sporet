import { title } from "process";

export default {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name of course",
        },
        {
            name: "images",
            type: "array",
            title: "Course images",
            of: [{type: "image"}],
        },
        {
            name: "description",
            type: "text",
            title: "Description of course",
        },
        {
        name: "slug",
        type: "slug",
        title: "course Slug",
        },
        {
            name: "price",
            type: "number",
            title: "Price of course",
        },
        {
            name: "category",
            title: "Category",
            type: "reference",
            to: [{type: "category"}],
        }
    ]
}