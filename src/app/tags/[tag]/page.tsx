import { getAllPosts } from '@/lib/api';
import { notFound } from 'next/navigation';
import { CommonSidebar } from '@/app/_components/common-sidebar';
import { BlogGrid } from '@/app/_components/blog-grid';


interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const allPosts = getAllPosts();
  const decodedTag = decodeURIComponent(tag).toLowerCase();
  
  const filteredPosts = allPosts.filter((post) =>
    post.tags?.map((t) => t.toLowerCase()).includes(decodedTag)
  );

  if (filteredPosts.length === 0) {
    notFound();
  }

  return (
    <main>
      <div className="mx-auto pt-10 px-[20px] w-full max-w-[1272px] lg:flex lg:justify-between lg:gap-[40px]">
        <div className="w-full pb-12">
          <h1 className="mb-10 text-lg lg:text-3xl font-bold">
            Posts tagged with #{decodedTag}
          </h1>
          <BlogGrid posts={filteredPosts} />
        </div>
        <CommonSidebar />
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  const allTags = new Set<string>(
    posts.flatMap((post) => post.tags?.map((tag) => tag.toLowerCase()) || [])
  );
  return Array.from(allTags).map((tag) => ({ tag }));
}