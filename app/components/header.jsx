import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 min-h-[72px]">
      <Link href="/" className="text-xl font-bold">
        Nextjs
      </Link>
      <nav className="flex items-center space-x-6">
        <Link href="/" className="py-3 px-2 leading-none">
          Home
        </Link>
        <Link href="/about" className="py-3 px-2 leading-none">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
