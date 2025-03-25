import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
// import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import Link from "next/link";
import DateFormatter from "@/app/_components/date-formatter";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((post) =>
      post.slug !== params.slug
    ).map((post) => ({
      slug: post.slug,
      title: post.title,
      date: post.date
    }))
    .slice(0, 3);

  console.log(relatedPosts);

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      
      {/* <Alert preview={post.preview} /> */}

      <div className="mx-auto px-[20px] w-full max-w-[1272px] flex justify-between gap-6">
        <div className="w-full">
          <article className="bg-white shadow-[0_1px_1px_rgba(0,0,0,0.06)] p-[32px_64px] rounded-lg">
            {/* <h2 className="mb-5 font-bold text-3xl">{post.title}</h2> */}
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={content} />
          </article>
          <div className="bg-white shadow-[0_1px_1px_rgba(0,0,0,0.06)] p-[32px_64px] rounded-lg mt-10">
            <h2 className="mb-6 text-3xl font-black tracking-tighter leading-tight">Read next</h2>
            <ul>
              {relatedPosts.map((relatedPost) => (
                <li key={relatedPost.slug} className="mt-4 first:mt-0">
                  <Link href={`/posts/${relatedPost.slug}`} className="hover:underline">
                    <div className="font-bold text-xl">{relatedPost.title}</div>
                    <div>
                      <DateFormatter dateString={relatedPost.date} />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <aside className="col-left flex-[360px_0_0]">
          <div className="bg-white shadow-[0_1px_1px_rgba(0,0,0,0.06)] p-[20px_24px] rounded-lg h-60 mb-6"></div>
          <div className="bg-white shadow-[0_1px_1px_rgba(0,0,0,0.06)] p-[20px_24px] rounded-lg h-60 mb-6"></div>
          <div className="bg-white shadow-[0_1px_1px_rgba(0,0,0,0.06)] p-[20px_24px] rounded-lg h-60"></div>
        </aside>
        
      </div>
      
      {/* <Alert preview={post.preview} />
      <Container>
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container> */}
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

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

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
