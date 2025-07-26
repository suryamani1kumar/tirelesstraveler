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

export default function Home() {
  const device = useDeviceType();
  return (
    <>
      <Head>
        <title>tirelesstraveler </title>
        <meta name="Content-Language" content="EN" />
        <meta name="keywords" content="tirelesstraveler" />
        <meta name="description" content="tirelesstraveler" />
        <link
          rel="canonical"
          href="https://www.tirelesstraveler.net/"
        />
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

              {device !== "Mobile" && (
                <Carousel.Caption>
                  <h3>{item.name}</h3>
                </Carousel.Caption>
              )}
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
          <HomeCard />
        </div>
      </div>
    </>
  );
}
