import Link from "next/link";
import { bragBlog } from "../interface";
import { client } from "../lib/sanity";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";

async function getData() {
    const query = `*[_type == "blog"][0...4] | order(_createdAt desc) {
        _id,
          name,
          blogtext,
          "slug": slug.current,
        "categoryName": category->name,
          "imageUrl": images[0].asset->url
      }`;
      const data = await client.fetch(query);

      return data;
}
export default async function Blog() {
    const data: bragBlog[] = await getData();
    return (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Tidliger kurs
                </h2>
                <Link className="text-primary flex items-center gap-x-1" href="/all">
                    Se alle <span><ArrowRightCircle></ArrowRightCircle></span>
                </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
    {
        data.map((blog) => (
            <div key={blog._id} className="group relative">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-grey-200 groupe-hoover:opacity-75 lg:h-80">
                    <Image 
                    src={blog.imageUrl} 
                    alt="Blog image" 
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full" 
                    width={300} 
                    height={300}
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <Link href={`/blog/${blog.slug}`}>
                                {blog.name}
                            </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            {blog.categoryName}
                        </p>
                    </div>
                </div> 
            </div>
        ))
    }
</div>
        </div>
    )
}