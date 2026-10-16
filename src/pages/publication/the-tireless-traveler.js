import BookDetail from "@/component/Book/BookDetail";
import Head from "next/head";
import { Tabs, Tab } from "react-bootstrap";

const Publication = () => {
  return (
    <>
      <Head>
        <title>Publication | The Tireless Traveler</title>
        <meta name="Content-Language" content="EN" />
        <meta
          name="keywords"
          content="Tireless Traveler, Arvi Singh Bahal, travel photography, book publication"
        />
        <meta
          name="description"
          content="Discover The Tireless Traveler, an extraordinary journey of global exploration, photography, and storytelling by Arvi Singh Bahal."
        />
        <link
          rel="canonical"
          href="https://www.tirelesstraveler.net/publication"
        />

        <meta
          property="og:title"
          content="The Tireless Traveler | Publication"
        />
        <meta
          property="og:description"
          content="Explore the extraordinary world of Arvi Singh Bahal through travel, photography, and storytelling."
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

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="The Tireless Traveler | Publication"
        />
        <meta
          name="twitter:description"
          content="A remarkable journey across the world, captured through photography and storytelling."
        />
        <meta
          name="twitter:image"
          content="https://www.tirelesstraveler.net/images/book-box-cover.webp"
        />
      </Head>

      <div className="publication-page">
        {/* Book Section */}
        <section
          id="publication-details"
          className="publication-book-section container"
        >
          <BookDetail />

          {/* Information Tabs */}
          <div className="publication-tabs-wrapper">
            <Tabs
              defaultActiveKey="author"
              id="publication-tabs"
              className="publication-tabs"
              fill
            >
              <Tab eventKey="author" title="About the Author">
                <div className="publication-tab-content">
                  <span className="publication-eyebrow">
                    THE MAN BEHIND THE LENS
                  </span>

                  <h3>Meet Arvi Singh Bahal</h3>

                  <p>
                    Arvinder “Arvi” Singh Bahal’s life is a testament to
                    extraordinary ambition and an unrelenting spirit of
                    adventure. After immigrating to the United States in the
                    1970s with just $108, he built successful businesses in
                    apparel and real estate before turning his passion for
                    travel into a lifelong pursuit of discovery.
                  </p>

                  <p>
                    By 2023, Arvi had visited all 193 UN member countries,
                    exploring more than two hundred territories and accumulating
                    over three million miles of travel. His adventures span
                    diverse landscapes and modes of transport, from freight
                    trains to dog sleds.
                  </p>

                  <p>
                    A passionate photographer with an archive of approximately
                    one million images, Arvi captures both iconic landmarks and
                    hidden corners of the world. Recognized as Future Astronaut
                    No. 326 with Virgin Galactic, his curiosity reaches beyond
                    our planet, celebrating the resilience of humanity and the
                    limitless possibilities of exploration.
                  </p>
                </div>
              </Tab>

              <Tab eventKey="book" title="About the Book">
                <div className="publication-tab-content">
                  <span className="publication-eyebrow">
                    MORE THAN A TRAVEL BOOK
                  </span>

                  <h3>A World Waiting to Be Discovered</h3>

                  <p>
                    The Tireless Traveler offers a window into the remarkable
                    places, people, and experiences that shape our world.
                    Through compelling photography and personal exploration, it
                    celebrates the beauty of unfamiliar cultures, the thrill of
                    discovery, and the courage to venture beyond the known.
                  </p>

                  <p>
                    Every journey reveals a new perspective. Every photograph
                    preserves a moment. Together, they invite readers to
                    experience the world with renewed curiosity and a deeper
                    appreciation for its extraordinary diversity.
                  </p>
                </div>
              </Tab>

              <Tab eventKey="visual" title="Book Preview">
                <div className="publication-tab-content">
                  <span className="publication-eyebrow">
                    EXPERIENCE THE JOURNEY
                  </span>

                  <h3>Take a Closer Look</h3>

                  <p>
                    Step inside the world of The Tireless Traveler through this
                    visual preview.
                  </p>

                  <div className="publication-video-wrapper">
                    <video
                      controls
                      preload="metadata"
                      poster="/images/book-box-cover.webp"
                    >
                      <source src="/images/book_video.mp4" type="video/mp4" />
                      Your browser does not support HTML video.
                    </video>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </section>
      </div>
    </>
  );
};

export default Publication;
