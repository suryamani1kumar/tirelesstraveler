import Image from 'next/image';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
const Publication = () => {
  return (
    <div>
      <div
        className="banner_blog"
        style={{
          background: 'url(/images/blog_banner.webp) center center no-repeat',
          backgroundSize: 'cover',
        }}
      >
        THE TIRELESS TRAVELER
      </div>
      <div className="container mx-auto px-4">
        <div className="product-container">
          <Image
            src="/images/ab-bahal-cover.webp"
            alt="Book Cover"
            className="product-image"
            height={0}
            width={0}
          />
          <div className="product-details">
            <div className="product-title">Author(s): Arvi Singh Bahal’s</div>
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
          </div>
        </div>
        <Tabs defaultActiveKey="Product Description">
          <Tab eventKey="Product Description" title="Product Description">
            <p>
              As a “Future Astronaut No. 326” on Virgin Galactic&apos;s space
              venture, Arvi&apos;s thirst for exploration knows no bounds.
              Whether capturing Africa&apos;s vibrant landscapes or trekking the
              polar extremes, he remains a humble student of our planet&apos;s
              contrasts: breathtaking beauty versus the challenges of human
              civilization. His adventures underline the resilience of human
              spirit and the endless marvels our world holds.
            </p>
          </Tab>
          <Tab eventKey="Table of Contents" title="Table of Contents">
            <p>
              As a “Future Astronaut No. 326” on Virgin Galactic&apos;s space
              venture, Arvi&apos;s thirst for exploration knows no bounds.
              Whether capturing Africa&apos;s vibrant landscapes or trekking the
              polar extremes, he remains a humble student of our planet&apos;s
              contrasts: breathtaking beauty versus the challenges of human
              civilization. His adventures underline the resilience of human
              spirit and the endless marvels our world holds.
            </p>
          </Tab>
        </Tabs>
        <div className="publiservideo">
          <video
            width="100%"
            height="600"
            controls
            autoplay
            poster="/images/book-box-cover.webp"
          >
            <source src="/images/book_video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Publication;
