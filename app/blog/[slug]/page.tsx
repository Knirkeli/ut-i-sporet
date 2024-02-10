import { client } from "@/app/lib/sanity";
import ImageGallery from "@/app/components/imageGallery";
import { singleBlog } from "@/app/interface";

async function getData(slug: string) {
    const query = `*[_type == "blog" && slug.current == "${slug}"][0]{
        _id,
            name,
            blogtext,
            "slug": slug.current,
            "categoryName": category->name,
            images,
     }`;

     const data =await client.fetch(query);
     return data;
}

export default async function BlogPage({ params, }: { params: { slug: string };
}) {
    const data: singleBlog = await getData(params.slug);
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <ImageGallery images={data.images} />
                </div>
            </div>
        </div>
    )
} 