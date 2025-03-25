import { Post } from '@/interfaces/post';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const files = fs.readdirSync(postsDirectory);
  const fileName = files.find((name) => name.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '') === slug);

  if (!fileName) {
    throw new Error(`Post with slug "${slug}" not found`);
  }

  const fullPath = join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const realSlug = fileName.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');

  // Extract date from filename prefix
  const datePrefix = fileName.match(/^\d{4}-\d{2}-\d{2}/)?.[0];
  if (!datePrefix) throw new Error(`Invalid filename format: ${fileName}. Expected YYYY-MM-DD prefix.`);
  data.date = `${datePrefix}T00:00:00.000Z`;;

  // Calculate reading time
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return { ...data, slug: realSlug, content, readingTime } as Post;
}

export function getAllPosts(): Post[] {
  const fileNames = getPostSlugs();
  const posts = fileNames
    .map((fileName) => {
      const slug = fileName.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');
      const fullPath = join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      // Extract date from filename prefix
      const datePrefix = fileName.match(/^\d{4}-\d{2}-\d{2}/)?.[0];
      if (!datePrefix) return null;
      data.date = `${datePrefix}T00:00:00.000Z`;;

      return { ...data, slug, content } as Post;
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
