import Image from 'next/image';

const Header = () => {
  return (
    <header className="sticky-header">
      <div className="logo">
        <Image
          src="https://www.dummyimage.com/300"
          alt="TIRELESS TRAVELER Logo"
          width={0}
          height={0}
        />
        <span>TIRELESS TRAVELER</span>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">
              FEATURES <i className="fa fa-chevron-down"></i>
            </a>
          </li>
          <li>
            <a href="#">
              POST FORMATS <i className="fa fa-chevron-down"></i>
            </a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
      <div className="search-icon">
        <i className="fa fa-search"></i>
      </div>
    </header>
  );
};

export default Header;
