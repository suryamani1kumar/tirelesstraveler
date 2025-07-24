import BookDetail from "@/component/Book/BookDetail";
import Head from "next/head";
const Publication = () => {
  return (
    <>
      <Head>
        <meta property="og:title" content="The Rock" />
        <meta property="og:type" content="video.movie" />
        <meta
          property="og:url"
          content="https://www.imdb.com/title/tt0117500/"
        />
        <meta
          property="og:image"
          content="https://ia.media-imdb.com/images/rock.jpg"
        />
      </Head>
      <div className="container mx-auto px-4">
        <BookDetail />
      </div>
    </>
  );
};

export default Publication;
