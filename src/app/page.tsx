import Container from "@/app/_components/container";
// import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
// import { MoreStories } from "@/app/_components/more-stories";
import { BlogGrid } from "@/app/_components/blog-grid";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  // const heroPost = allPosts[0];

  // const morePosts = allPosts.slice(1);

  return (
    <main>
      <section className="py-12">
        <div className="mx-auto px-[20px] w-full max-w-[1272px]">
          <h2 className="mb-5 font-bold text-3xl">Blog Grid</h2>
          <BlogGrid posts={allPosts} />
        </div>
      </section>
      {/* <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container> */}
    </main>
  );
}
