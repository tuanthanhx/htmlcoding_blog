import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import { CMS_NAME } from '@/lib/constants';
import markdownToHtml from '@/lib/markdownToHtml';
// import Alert from "@/app/_components/alert";
import { CommonSidebar } from '@/app/_components/common-sidebar';
import { PostBody } from '@/app/_components/post-body';
import { PostHeader } from '@/app/_components/post-header';
import DateFormatter from '@/app/_components/date-formatter';

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || '');

  return (
    <main>
      {/* <Alert preview={post.preview} /> */}

      <div className="mx-auto pt-10 px-[20px] w-full max-w-[1272px] lg:flex lg:justify-between lg:gap-[40px]">
        <div className="w-full pb-12">
          <article className="post">
            <PostHeader title={post.title} coverImage={post.coverImage} date={post.date} author={post.author} tags={post.tags} readingTime={post.readingTime} />
            <PostBody content={content} />
          </article>
        </div>
        <CommonSidebar />
      </div>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} - ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
