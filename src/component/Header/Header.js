import { useDeviceType } from "@/hook/useDeviceType";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Sign from "../sign/Sign";
import axios from "axios";
import Cookies from "js-cookie";

const signConfig = [
  {
    name: "fullname",
    label: "Full Name",
    type: "text",
    placeholder: "Enter full name",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter email",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    required: true,
  },
];

const SignInModal = Sign(signConfig.slice(1, 3));
const SignUpModal = Sign(signConfig);

const Header = () => {
  const device = useDeviceType();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [openSignInModal, setOpenSignInModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  const handleCloseSignInModal = () => setOpenSignInModal(false);
  const handleShowSignInModal = () => {
    setOpenSignInModal(true);
    setShow(false);
  };

  const handleCloseSignUpModal = () => setOpenSignUpModal(false);
  const handleShowSignUpModal = () => {
    setOpenSignUpModal(true);
    setShow(false);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    router.events.on("routeChangeComplete", handleClose);
    return () => {
      router.events.off("routeChangeComplete", handleClose);
    };
  }, [router]);

  const signInSubmit = async (userdata) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/signIn`,
        userdata
      );
      console.log("data", data);
      // const token = "Hello";
      // Cookies.set("token", token, { expires: 7 }); // expires in 7 days

      router.push("/flip-book/the-tireless-traveler-ebook.html");
    } catch (error) {
      if (error.response) {
        console.error("Error:", error.response.data);
      } else {
        console.error("Error:", error.message);
      }
    }
  };
  const signUpSubmit = async (userdata) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/signUp`,
        userdata
      );
    } catch (error) {
      if (error.response) {
        console.error("Error:", error.response.data);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <>
      <header className="sticky-header">
        <div className="container mx-auto px-4 py-3 flexcontainer">
          <div className="logo">
            <Link href="/">
              <span>TIRELESS TRAVELER</span>
            </Link>
          </div>
          {device === "Desktop" || device === "Tablet" ? (
            <nav className="flexcontainer">
              <ul>
                <li>
                  <Link href="/publication">Publication</Link>
                </li>

                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li onClick={handleShowSignInModal}>Sign in</li>
                <li onClick={handleShowSignUpModal}>Sign up</li>
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
                <Link href="/publication">Publication</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li onClick={handleShowSignInModal}>Sign in</li>
              <li onClick={handleShowSignUpModal}>Sign up</li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </header>
      <SignInModal
        handleClose={handleCloseSignInModal}
        open={openSignInModal}
        onSumbit={signInSubmit}
      />
      <SignUpModal
        handleClose={handleCloseSignUpModal}
        open={openSignUpModal}
        onSumbit={signUpSubmit}
      />
    </>
  );
};

export default Header;
