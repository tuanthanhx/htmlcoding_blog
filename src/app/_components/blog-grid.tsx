import { Post } from "@/interfaces/post";
import Link from "next/link";
// import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function BlogGrid({ posts }: Props) {
  return (
    // <section>
    //   <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
    //     More Stories
    //   </h2>
    //   <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
    //     {posts.map((post) => (
    //       <PostPreview
    //         key={post.slug}
    //         title={post.title}
    //         coverImage={post.coverImage}
    //         date={post.date}
    //         author={post.author}
    //         slug={post.slug}
    //         excerpt={post.excerpt}
    //       />
    //     ))}
    //   </div>
    // </section>
    <ul className="grid grid-cols-3 gap-8">
      {posts.map((post) => (
        <li key={post.slug} className="group bg-[#f5f8fa] rounded-lg overflow-hidden">
          <Link href={`/posts/${post.slug}`}>
            <figure className="item-image overflow-hidden">
              <img className="group-hover:scale-110 transition-transform duration-300" src={post.coverImage} alt={post.title} />
            </figure>
            <h3 className="item-title py-6 px-5 font-bold text-xl">{post.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
