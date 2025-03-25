import Link from "next/link";

const Header = () => {
  return (
    // <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
    //   <Link href="/" className="hover:underline">
    //     Blog
    //   </Link>
    //   .
    // </h2>
    <header className="w-full bg-white shadow-[0_1px_1px_rgba(0,0,0,0.06)] relative z-[10000]">
      <div className="mx-auto px-[20px] py-[10px] w-full max-w-[1272px]">
        <a href="/" className="font-mono text-[60px] font-[900]">HTMLCODING Blog</a>
      </div>
    </header>
  );
};

export default Header;
