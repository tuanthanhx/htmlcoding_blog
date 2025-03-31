import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-[0_1px_1px_rgba(0,0,0,0.06)] relative z-[10000]">
      <div className="flex justify-between items-center mx-auto px-[20px] py-[10px] w-full max-w-[1272px]">
        <Link href="/" className="font-mono font-[900] text-[36px] md:text-[60px]">HTMLCODING Blog</Link>
        <ul className="hidden lg:flex space-x-6">
          <Link href="/">Blog</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
