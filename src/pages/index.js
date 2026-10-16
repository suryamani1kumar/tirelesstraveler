import HomeCard from "@/component/BlogCard";
import { useDeviceType } from "@/hook/useDeviceType";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";
const banner = [
  {
    imageName: "/images/advanture.webp",
    name: "Sky Dive Pyramid Giza, Egypt.",
  },
  {
    imageName: "/images/bali.webp",
    name: "Bali, Indonesia",
  },
  {
    imageName: "/images/antarctic_circle.webp",
    name: "McMurdo Station, Antartica",
  },
  {
    imageName: "/images/galapagus_trip.webp",
    name: "Charles Darwin Station, Galapagos",
  },
  {
    imageName: "/images/guadalcanal_solomon_island.webp",
    name: "The Guadalcanal American Memorial",
  },
  {
    imageName: "/images/sahara_desert_maurutania.webp",
    name: "Camping at Sahara Desert",
  },
  {
    imageName: "/images/sony_stick_bull_run_trip.webp",
    name: "Running with Bulls at Pamplona, Italy",
  },
];


const gallery = [
  {
    name: "Ruby ( Manik )",
    img: "/images/advanture.webp",
    link: "/gemstones/ruby",
  },
  {
    name: "Blue Sapphire ( Neelam )",
    img: "https://res.cloudinary.com/djrtuyxoj/image/upload/v1787827408/gemstone-products/npp4ma5frmptmjpzmbpg.png",
    link: "/gemstones/blue-sapphire",
  },
  {
    name: "Emerald ( Panna )",
    img: "https://res.cloudinary.com/djrtuyxoj/image/upload/v1787827051/gemstone-products/mlb3on5mpeothilxkmrz.png",
    link: "/gemstones/emerald",
  },
  {
    name: "Yellow Sapphire ( Pukhraj )",
    img: "https://res.cloudinary.com/djrtuyxoj/image/upload/v1787827592/gemstone-products/kpaz8jt4kdiz2we09p6h.png",
    link: "/gemstones/yellow-sapphire",
  },
  {
    name: "Pearl ( Moti )",
    img: "https://res.cloudinary.com/djrtuyxoj/image/upload/v1787844594/gemstone-products/t7vjucddlznnuou0adba.png",
    link: "/gemstones/pearl",
  },
  {
    name: "Red Coral ( Moonga )",
    img: "https://res.cloudinary.com/djrtuyxoj/image/upload/v1787844625/gemstone-products/kbdkfjjype71c5hyelg3.png",
    link: "/gemstones/red-coral",
  },
  {
    name: "Opal",
    img: "https://res.cloudinary.com/djrtuyxoj/image/upload/v1787828503/gemstone-products/n6e9w7udpbx85myroua2.png",
    link: "/gemstones/opal",
  },
  {
    name: "Turquoise ( Firoza )",
    img: "https://res.cloudinary.com/djrtuyxoj/image/upload/v1787844648/gemstone-products/ozvefhlq1q4mj0ntonxp.jpg",
    link: "/gemstones/turquoise",
  },
  {
    name: "Citrine ( Sunela )",
    img: "https://res.cloudinary.com/djrtuyxoj/image/upload/v1787844667/gemstone-products/oes0zceeynedoault6f0.jpg",
    link: "/gemstones/citrine",
  },
];

export default function Home() {
  const device = useDeviceType();
  const featuredCategory = gallery[0];
  const remainingCategories = gallery.slice(1, 5);
  return (
    <>
      <Head>
        <title>The Tireless Traveler </title>
        <meta name="Content-Language" content="EN" />
        <meta name="keywords" content="The Tireless Traveler" />
        <meta name="description" content="The Tireless Traveler" />
        <link rel="canonical" href="https://www.tirelesstraveler.net/" />
        <meta property="og:title" content="tirelesstraveler" />
        <meta property="og:url" content="https://www.tirelesstraveler.net" />
        <meta
          property="og:image"
          content="https://www.tirelesstraveler.net/images/book-box-cover.webp"
        />
      </Head>
      <div>
        <Carousel>
          {banner.map((item, i) => (
            <Carousel.Item key={i}>
              <div className="carouselconatiner">
                <Image
                  src={item.imageName}
                  alt="asdsadsas"
                  height={0}
                  width={0}
                />
              </div>

              {/* {device !== "Mobile" && ( */}
              <Carousel.Caption>
                <h3>{item.name}</h3>
              </Carousel.Caption>
              {/* )} */}
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="container mx-auto px-4">
          <div>
            <div className="authorHeader">
              <h1>About the author</h1>
              <div className="underline"></div>
              <p>
                Arvinder (Arvi) Singh Bahal is an entrepreneur, explorer, and
                pilot who built global ventures and traveled to the world&apos;s
                most remote locations.
              </p>
            </div>
            <div className="Authorcontainer">
              <div className="image-container">
                <Image
                  src="/images/home_about.webp"
                  alt="Profile Picture"
                  height={0}
                  width={0}
                />
              </div>
              <div className="content">
                <h2>Arvinder Singh Bahal</h2>
                <p>
                  Arvinder (Arvi) Singh Bahal, an entrepreneur and explorer,
                  built successful ventures in fashion, hospitality, and real
                  estate after moving to the U.S. in 1975.
                </p>
                <p>
                  A certified pilot and avid traveler, he has explored the
                  Poles, Sahara, and North Korea. Fluent in six languages, he
                  lives in Beverly, Massachusetts. This book is his writing
                  debut.
                </p>
                <ul className="list">
                  <li>
                    <i className="fa fa-check"></i>7 Continents Explored,
                  </li>
                  <li>
                    <i className="fa fa-check"></i>196 Countries Visited
                  </li>
                </ul>

                <button className="about-read-more">
                  <Link href="/about">READ MORE</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="aboutHeader">
            <h5>About the Book</h5>
            <div className="underline"></div>
          </div>
          <section className="about-company">
            <div className="about-content">
              <p>
                Arvinder (Arvi) Singh Bahal, born on October 13, 1945, in Agra,
                India, is a successful entrepreneur and avid explorer. He
                initially joined the National Defense Academy but had to leave
                due to a polo accident. After working in a tea plantation in
                Darjeeling, he entered the garment manufacturing business and
                moved to the United States in 1975, gaining citizenship by 1979.
                Over the past 45 years, Arvi has built successful ventures in
                fashion, sportswear, hospitality, and real estate.
              </p>
              <p>
                Arvi is also passionate about travel and photography, capturing
                human-environment interactions through his lens. He has traveled
                to remote locations like the North and South Poles, the Sahara
                Desert, and North Korea, among others. He holds piloting
                certifications for both planes and helicopters. Fluent in six
                languages, Arvi lives in Beverly, Massachusetts, with his wife,
                Pamela, and their two children and four grandchildren. This book
                marks his first writing effort, with more to come.
              </p>
              <button className="about-read-more">
                <Link href="/publication">READ MORE</Link>
              </button>
            </div>
            <div className="about-content-images">
              <Image
                src="/images/book-box-cover.webp"
                alt="Profile Picture"
                height={0}
                width={0}
              />
            </div>
          </section>
          {/* <HomeCard /> */}
          <div className="relative mx-auto max-w-7xl">
            <h2 className="mb-3 font-serif text-2xl font-bold text-[#1A1A1A] sm:text-3xl">
              Our Gallery
            </h2>

            {/* ================= EDITORIAL GRID ================= */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
              {/* ================= FEATURED CATEGORY ================= */}
              <Link
                href={`${featuredCategory.link}`}
                className="group relative min-h-[430px] overflow-hidden rounded-2xl bg-[#EDE8DC] sm:col-span-2 lg:col-span-1 lg:row-span-2"
              >
                {/* Image */}
                <img
                  src={featuredCategory.img}
                  alt={featuredCategory.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />


              </Link>

              {/* ================= SMALL CATEGORIES ================= */}
              {remainingCategories.map((gemstone) => (
                <Link
                  key={gemstone.link}
                  href={gemstone.link}
                  className="group relative min-h-[220px] overflow-hidden rounded-2xl bg-[#EDE8DC]"
                >
                  {/* Image */}
                  <img
                    src={gemstone.img}
                    alt={gemstone.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent transition-all duration-300 group-hover:from-black/85" />

                </Link>
              ))}
            </div>

            {/* ================= MOBILE / EXTRA CATEGORIES ================= */}
            {gallery.length > 5 && (
              <div className="my-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {gallery.slice(5).map((gemstone) => (
                  <Link
                    key={gemstone.link}
                    href={gemstone.link}
                    className="group relative h-45 overflow-hidden rounded-2xl bg-[#EDE8DC]"
                  >
                    <img
                      src={gemstone.img}
                      alt={gemstone.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />

                  </Link>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}
