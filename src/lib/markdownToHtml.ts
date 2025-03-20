import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import rehypePrism from "@mapbox/rehype-prism";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
  .use(remarkParse)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeFormat)
  .use(rehypePrism)
  .use(rehypeStringify)
  .process(markdown);
  return result.toString();
}
