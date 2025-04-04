import { Post } from "@/interfaces/post";
import Link from "next/link";
import CoverImage from "./cover-image";

type Props = {
  posts: Post[];
};

export function BlogGrid({ posts }: Props) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 sm:gap-[20px] lg:gap-8">
      {posts.map((post) => (
        <li key={post.slug}>
          <CoverImage title={post.title} src={post.coverImage} slug={post.slug} thumbnail />
          <h3 className="py-6 font-bold text-base lg:text-xl">
            <Link href={`/posts/${post.slug}`}>
              {post.title}
            </Link>
          </h3>
        </li>
      ))}
    </ul>
  );
}
