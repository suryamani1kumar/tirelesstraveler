import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky-header">
      <div className="container mx-auto px-4 py-2 flexcontainer">
        <div className="logo">
          <Image
            src="https://www.dummyimage.com/300"
            alt="TIRELESS TRAVELER Logo"
            width={0}
            height={0}
          />
          <span>TIRELESS TRAVELER</span>
        </div>
        <nav className="flexcontainer">
          <ul>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/publication">Publication</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
          <div className="search-icon">
            <i className="fa fa-search"></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
