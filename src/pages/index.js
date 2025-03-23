import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
const banner = [
  {
    imageName: '/images/advanture.webp',
    name: 'First slide label',
    shortDescription:
      'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    imageName: '/images/bali.webp',
    name: 'First slide label',
    shortDescription:
      'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    imageName: '/images/antarctic_circle.webp',
    name: 'First slide label',
    shortDescription:
      'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    imageName: '/images/galapagus_trip.webp',
    name: 'First slide label',
    shortDescription:
      'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    imageName: '/images/guadalcanal_solomon_island.webp',
    name: 'First slide label',
    shortDescription:
      'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    imageName: '/images/sahara_desert_maurutania.webp',
    name: 'First slide label',
    shortDescription:
      'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    imageName: '/images/sony_stick_bull_run_trip.webp',
    name: 'First slide label',
    shortDescription:
      'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
];

export default function Home() {
  return (
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
            <Carousel.Caption>
              <h3>{item.name}</h3>
              <p>{item.shortDescription}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="container mx-auto px-4">
        <div>
          <div className="authorHeader">
            <h1>About the author</h1>
            <div class="underline"></div>
            <p>
              Arvinder (Arvi) Singh Bahal is an entrepreneur, explorer, and
              pilot who built global ventures and traveled to the world&apos;s
              most remote locations.
            </p>
          </div>
          <div class="Authorcontainer">
            <div class="image-container">
              <Image
                src="/images/home_about.webp"
                alt="Profile Picture"
                height={0}
                width={0}
              />
            </div>
            <div class="content">
              <h1>Arvinder (Arvi) Singh Bahal</h1>
              <p>
                Arvinder (Arvi) Singh Bahal, an entrepreneur and explorer, built
                successful ventures in fashion, hospitality, and real estate
                after moving to the U.S. in 1975.
              </p>
              <p>
                A certified pilot and avid traveler, he has explored the Poles,
                Sahara, and North Korea. Fluent in six languages, he lives in
                Beverly, Massachusetts. This book is his writing debut.
              </p>
              <ul class="list">
                <li>4 Continents Explored, 30 Countries Visited</li>
                <li>250,000 KM Traveled</li>
                <li>15,000 Photos Taken</li>
              </ul>

              <button class="about-read-more">
                <Link href="/about">READ MORE</Link>
              </button>
            </div>
          </div>
        </div>
        <section class="about-company">
          <div class="about-content">
            <h5>Publication</h5>
            <p>
              Arvinder (Arvi) Singh Bahal, born on October 13, 1945, in Agra,
              India, is a successful entrepreneur and avid explorer. He
              initially joined the National Defense Academy but had to leave due
              to a polo accident. After working in a tea plantation in
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
            <button class="about-read-more">
              <Link href="/publication">READ MORE</Link>
            </button>
          </div>
          <div class="about-content-images">
            <Image
              src="/images/book-box-cover.webp"
              alt="Profile Picture"
              height={0}
              width={0}
            />
          </div>
        </section>
        <div className="home_card_wrapper">
          {Array(3)
            .fill(0)
            .map((item, i) => (
              <div class="home_card" key={i}>
                <Image
                  src="/images/silk-road-trip.webp"
                  alt="Flight Cancellation"
                  height={0}
                  width={0}
                />
                <div class="home_card_content">
                  <Link href="/blog/asdsdas">
                    <div class="home_card_category">
                      <div>Travel</div>
                      <div class="home_card_date"> 21 Mar, 2025</div>
                    </div>

                    <div class="home_card_title">
                      <h4>Lorem Ipsum is simply dummy</h4>

                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
