import Image from 'next/image';
const About = () => {
  return (
    <div>
      <div className="banner_blog">About: Arvi Singh Bahal’s</div>
      <div className="container mx-auto px-4">
        <div className="product-container">
          <Image
            src="/images/about.webp"
            alt="Book Cover"
            className="product-image"
            height={0}
            width={0}
          />
          <div className="product-details">
            <h4>Early Life and Career Beginnings</h4>
            <p>
              Born on October 13, 1945, in Agra, India, Arvinder (Arvi) Singh
              Bahal grew up near the iconic Taj Mahal. He pursued his dream of
              serving in the army by joining the National Defense Academy in
              1962 but had to leave due to a polo accident that resulted in
              partial hearing loss. He then spent nearly four years working on a
              Scottish-owned tea plantation in Darjeeling before entering the
              garment manufacturing business near Delhi by 1970.
            </p>
            <h4>Immigration and Entrepreneurial Success</h4>
            <p>
              Arvi’s first visit to the United States in 1975 for business led
              him to embrace American life. He obtained a Green Card in 1977 and
              became a U.S. citizen by 1979. Over the past four and a half
              decades, he built successful ventures in fashion, sportswear,
              hospitality, and real estate. Residing in Beverly, Massachusetts,
              he married Pamela in 1979, and they have two children, Sukhvinder,
              a fintech professional, and Tasha, a lawyer, along with four
              grandchildren.
            </p>
            <h4>Passion for Exploration and Photography</h4>
            <p>
              A devoted Sikh, Arvi’s adventurous spirit and determination have
              fueled his lifelong passion for travel and photography. He earned
              a pilot’s license for a single-engine plane and took helicopter
              piloting classes to explore and document his journeys. Speaking
              six languages, he has traveled extensively, capturing human
              interactions and landscapes across remote regions, including
              Greenland, the Poles, Patagonia, and the world’s great deserts.
            </p>
            <h4>Legacy and Recognition</h4>
            <p>
              Arvi&apos;s photography and explorations have earned him global
              recognition, with interviews featured across various media
              platforms. His photo documentaries offer insights into both
              popular and hidden corners of the world. This publication marks
              his debut as an author, with promises of more books to come,
              further chronicling his extraordinary journey as an entrepreneur
              and explorer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
