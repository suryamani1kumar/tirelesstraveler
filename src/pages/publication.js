import BookDetail from "@/component/Book/BookDetail";
import Head from "next/head";
const Publication = () => {
  return (
    <>
      <Head>
        <title>tirelesstraveler publication</title>

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
      </div>
    </>
  );
};

export default Publication;
