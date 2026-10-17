
import React from "react";
import Head from "next/head";
import { Tabs, Tab } from "react-bootstrap";
import PlaygroundDetail from "@/component/Book/PlaygroundDetails";

const Publication = () => {
  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>My Planet My Playground | Arvinder Singh Bahal</title>

        <meta name="Content-Language" content="en" />

        <meta
          name="keywords"
          content="My Planet My Playground, Arvinder Singh Bahal, Arvi Bahal, adventure book, world exploration, travel photography, travel adventures, book publication"
        />

        <meta
          name="description"
          content="Discover My Planet My Playground by Arvinder (Arvi) Singh Bahal, an extraordinary journey of adventure, exploration, remarkable destinations, and unforgettable experiences across the world and beyond."
        />

        <meta name="author" content="Arvinder (Arvi) Singh Bahal" />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href="https://www.tirelesstraveler.net/publication"
        />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="My Planet My Playground | Arvinder Singh Bahal"
        />

        <meta
          property="og:description"
          content="Explore the extraordinary adventures of Arvinder (Arvi) Singh Bahal in My Planet My Playground, a celebration of discovery, exploration, and the spirit of adventure."
        />

        <meta
          property="og:image"
          content="https://www.tirelesstraveler.net/images/MY_PLAYNET_MY_PLAYGROUND_COVER.jpg"
        />

        <meta
          property="og:image:alt"
          content="My Planet My Playground book cover"
        />

        <meta
          property="og:url"
          content="https://www.tirelesstraveler.net/publication"
        />

        <meta property="og:type" content="book" />

        <meta
          property="og:site_name"
          content="Tireless Traveler"
        />

        <meta
          property="book:author"
          content="Arvinder Singh Bahal"
        />

        {/* Twitter / X */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="My Planet My Playground | Arvinder Singh Bahal"
        />

        <meta
          name="twitter:description"
          content="Discover a remarkable life of adventure, exploration, and unforgettable journeys with Arvinder (Arvi) Singh Bahal."
        />

        <meta
          name="twitter:image"
          content="https://www.tirelesstraveler.net/images/MY_PLAYNET_MY_PLAYGROUND_COVER.jpg"
        />

        <meta
          name="twitter:image:alt"
          content="My Planet My Playground book cover"
        />
      </Head>

      <div className="publication-page">
        <section
          id="publication-details"
          className="publication-book-section container"
        >
          <PlaygroundDetail />

          <div className="publication-tabs-wrapper">
            <Tabs
              defaultActiveKey="author"
              id="publication-tabs"
              className="publication-tabs"
              fill
            >
              {/* About the Author */}
              <Tab eventKey="author" title="About the Author">
                <div className="publication-tab-content">

                  <h3>Meet Arvi Singh Bahal</h3>

                  <p>
                    Arvinder (Arvi) Singh Bahal is an entrepreneur,
                    photographer, and passionate explorer whose extraordinary
                    life is driven by curiosity and adventure. Born in Agra,
                    India, he moved to the United States in 1975 and built
                    successful ventures across fashion, sportswear,
                    hospitality, and real estate.
                  </p>

                  <p>
                    His travels have taken him across the globe, from the
                    Sahara Desert and the Amazon Rainforest to the Arctic
                    and Antarctica. Through his remarkable journeys, Arvi
                    has experienced diverse cultures, extraordinary
                    landscapes, and some of the world&apos;s most remote
                    destinations.
                  </p>

                  <p>
                    In August 2025, at the age of 80, Arvi traveled aboard
                    Blue Origin&apos;s NS-34 mission, adding space exploration
                    to his extraordinary list of adventures. His life
                    demonstrates that curiosity, courage, and the desire
                    to discover the unknown have no age limit.
                  </p>
                </div>
              </Tab>

              {/* About the Book */}
              <Tab eventKey="book" title="About the Book">
                <div className="publication-tab-content">
                  <h3>My Planet My Playground</h3>

                  <p>
                    My Planet My Playground celebrates the extraordinary
                    adventures of Arvinder (Arvi) Singh Bahal, whose passion
                    for exploration has taken him to remarkable destinations
                    across the planet and beyond. From deserts and frozen
                    landscapes to remote islands and outer space, his
                    experiences reflect a fearless spirit of discovery.
                  </p>

                  <p>
                    Through captivating stories, unforgettable experiences,
                    and a deep appreciation for the world&apos;s diverse cultures
                    and landscapes, this book invites readers to look
                    beyond the ordinary and embrace the possibilities
                    of exploration.
                  </p>

                  <p>
                    More than a travel book, My Planet My Playground is a
                    celebration of curiosity, courage, and a life dedicated
                    to discovering the extraordinary.
                  </p>
                </div>
              </Tab>

              {/* Book Preview */}
              <Tab eventKey="visual" title="Book Preview">
                <div className="publication-tab-content">

                  <h3>Explore the Book</h3>

                  <p>
                    Take a closer look at My Planet My Playground and
                    discover the adventures, places, and experiences
                    that make Arvi&apos;s journey extraordinary.
                  </p>

                  <div className="publication-video-wrapper">
                    <video
                      controls
                      preload="metadata"
                      poster="/images/MY_PLAYNET_MY_PLAYGROUND_COVER.jpg"
                    >
                      <source
                        src="/images/book_video.mp4"
                        type="video/mp4"
                      />

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
