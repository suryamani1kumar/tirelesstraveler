import { useDeviceType } from '@/hook/useDeviceType';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
  const device = useDeviceType();
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    router.events.on('routeChangeComplete', handleClose);
    return () => {
      router.events.off('routeChangeComplete', handleClose);
    };
  }, [router]);
  return (
    <header className="sticky-header">
      <div className="container mx-auto px-4 py-4 flexcontainer">
        <div className="logo">
          <Link href="/">
            <span>TIRELESS TRAVELER</span>
          </Link>
        </div>
        {device === 'Desktop' || device === 'Tablet' ? (
          <nav className="flexcontainer">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
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
          </nav>
        ) : (
          <div onClick={handleShow}>
            <i className="fa fa-bars"></i>
          </div>
        )}
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>TIRELESS TRAVELER</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="slidenav-url-group">
            <li>
              <Link href="/">Home</Link>
            </li>
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
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;
