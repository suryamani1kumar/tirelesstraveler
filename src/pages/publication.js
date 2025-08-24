import BookDetail from "@/component/Book/BookDetail";
import Head from "next/head";
import { Tabs, Tab } from "react-bootstrap";
const Publication = () => {
  return (
    <>
      <Head>
        <title>The Tireless Traveler</title>

        {/* Basic SEO */}
        <meta name="Content-Language" content="EN" />
        <meta
          name="keywords"
          content="tirelesstraveler, Arvi, publication, photography"
        />
        <meta
          name="description"
          content="Explore Arvi’s publication journey with breathtaking photography and storytelling."
        />
        <link
          rel="canonical"
          href="https://www.tirelesstraveler.net/publication"
        />

        {/* Open Graph for WhatsApp/Facebook/LinkedIn */}
        <meta
          property="og:title"
          content="Tireless Traveler – Arvi's Global Journey"
        />
        <meta
          property="og:description"
          content="Explore Arvi’s journey, a photographer and future astronaut, through captivating visuals and stories."
        />
        <meta
          property="og:image"
          content="https://www.tirelesstraveler.net/images/book-box-cover.webp"
        />
        <meta
          property="og:url"
          content="https://www.tirelesstraveler.net/publication"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tireless Traveler – Arvi's Global Journey"
        />
        <meta
          name="twitter:description"
          content="Explore Arvi’s breathtaking photography and inspiring journey."
        />
        <meta
          name="twitter:image"
          content="https://www.tirelesstraveler.net/images/book-box-cover.webp"
        />
      </Head>

      <div className="container mx-auto px-4">
        <BookDetail />
        <Tabs defaultActiveKey="Product Description">
          <Tab eventKey="Product Description" title="About Author">
            <p>
              Arvi Singh Bahal’s journey reflects an unrelenting wanderlust and
              entrepreneurial drive. From immigrating to the U.S. in the 1970s
              with just $108 to building successful businesses in apparel and
              real estate, he transformed work-related travel into a lifelong
              quest. Visiting all 193 UN countries by 2023, he has explored over
              two hundred territories using diverse modes, from freight trains
              to dog sleds, accumulating over three million miles of travel.
            </p>

            <p>
              A passionate photographer with an archive of one million images,
              Arvi documents both iconic landmarks and hidden gems. As “Future
              Astronaut No. 326” with Virgin Galactic, his spirit of exploration
              extends beyond Earth. Whether navigating polar extremes or
              capturing cultural landscapes, his adventures highlight the
              resilience of humanity and the boundless wonders of our world.
            </p>
          </Tab>
          <Tab eventKey="Table of Contents" title="About Book">
            <p style={{ padding: "10px" }}>
              A passionate photographer with an archive of one million images,
              Arvi documents both iconic landmarks and hidden gems. As “Future
              Astronaut No. 326” with Virgin Galactic, his spirit of exploration
              extends beyond Earth. Whether navigating polar extremes or
              capturing cultural landscapes, his adventures highlight the
              resilience of humanity and the boundless wonders of our world.
            </p>
          </Tab>
          <Tab eventKey="visual" title="Visual">
            <video
              width="100%"
              controls
              // autoPlay
              poster="/images/book-box-cover.webp"
            >
              <source src="/images/book_video.mp4" type="video/mp4" />
            </video>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Publication;
