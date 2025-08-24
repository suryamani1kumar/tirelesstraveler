import { useDeviceType } from "@/hook/useDeviceType";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Sign from "../sign/Sign";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

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
    handleClose();
    handleCloseSignUpModal();
  };

  const handleCloseSignUpModal = () => setOpenSignUpModal(false);
  const handleShowSignUpModal = () => {
    setOpenSignUpModal(true);
    handleClose();
    handleCloseSignInModal();
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
        userdata,
        { withCredentials: true }
      );
      console.log("data", data);

      // router.push("/flip-book/the-tireless-traveler-ebook.html");
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
      if (data.message === "customer registered successfully") {
        handleShowSignInModal();
      }
    } catch (error) {
      if (error.response) {
        console.error("Error:", error.response.data);
      } else {
        console.error("Error:", error.message);
      }
    }
  };
  const HandleProfile = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/signInAuth`,
        {
          withCredentials: true,
        }
      );
      console.log("res.data", res);
    } catch (err) {
      if (err.response) {
        if (err.response.status === 401) {
          handleShowSignInModal();
        } else {
          console.error("API error:", err.response.data || err.message);
        }
      } else {
        console.error("Unexpected error:", err.message);
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
                <li>
                  <DropdownButton
                    drop={"down-centered"}
                    variant="secondary"
                    title={`Login`}
                    size="sm"
                  >
                    <Dropdown.Item onClick={handleShowSignInModal}>
                      Login
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleShowSignUpModal}>
                      Register
                    </Dropdown.Item>
                    <Dropdown.Item onClick={HandleProfile}>
                      My Profile
                    </Dropdown.Item>
                  </DropdownButton>
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
                <Link href="/publication">Publication</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li onClick={handleShowSignInModal}>Login</li>
              <li onClick={handleShowSignUpModal}>Register</li>
              <li onClick={HandleProfile}>My Profile</li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </header>
      <SignInModal
        handleClose={handleCloseSignInModal}
        handleopen={handleShowSignUpModal}
        open={openSignInModal}
        onSumbit={signInSubmit}
        showSignUp={true}
      />
      <SignUpModal
        handleClose={handleCloseSignUpModal}
        handleopen={handleShowSignInModal}
        open={openSignUpModal}
        onSumbit={signUpSubmit}
        showSignUp={false}
      />
    </>
  );
};

export default Header;
