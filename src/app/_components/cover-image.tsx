import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  thumbnail?: boolean;
};

const CoverImage = ({ title, src, slug, thumbnail }: Props) => {
  const image = (
    <Image
      src={src}
      alt={title}
      className="w-full shadow-[0_0_0_1px_rgba(0,0,0,.05)]"
      width={thumbnail ? 400 : 832}
      height={thumbnail ? 197: 410}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
