import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  readingTime?: number;
};

export function PostHeader({ title, coverImage, date, author, readingTime }: Props) {
  return (
    <>
      <div className="mb-6">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="mb-12">
        <Avatar name={author.name} picture={author.picture} />
        <div className="mt-4">
          Posted on <DateFormatter dateString={date} />
        </div>
        <div className="mt-2">
          {readingTime} min read
        </div>
      </div>
      <PostTitle>{title}</PostTitle>
    </>
  );
}
