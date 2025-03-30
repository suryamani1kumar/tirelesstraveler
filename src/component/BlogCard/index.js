
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import styles from './BlogCard.module.scss';
import classNames from 'classnames';
import { useDeviceType } from '@/hook/useDeviceType';
const Data = {
    content:
      'the towering Petronas Twin Towers to the historic temples and delicious street food ...',
    metaTitle: '',
    metaDescription: '',
    metaKeyword: '',
    pageUrl: '/blog/best-places-in-india',
    heading: 'Top Places to visit in India',
    category: '',
    status: '',
  };
const HomeCard = () => {
   
  const device = useDeviceType();
  const [activeIndex, setActiveIndex] = useState(0);

  const tabsContainerRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - tabsContainerRef.current.offsetLeft;
    scrollLeft = tabsContainerRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - tabsContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    tabsContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handlePrevButton = () => {
    const card = tabsContainerRef.current;
    if (card) {
      const width = card.clientWidth;
      card.scrollLeft -= width;
    }
  };

  const handleNextButton = () => {
    const card = tabsContainerRef.current;
    if (card) {
      const width = card.clientWidth;
      card.scrollLeft += width;
    }
  };
  return (
    <div className={styles.carousel_container}>
      
      <div
        className={styles.swiperRootContainer}
        ref={tabsContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        <div className={styles.wrapper}>
          {Array(10)
            .fill({ ...Data })
            .map((item, i) => (
              <div className={styles.card} key={i}>
                <Link href={item.pageUrl}>
                  <Image
                    src="/images/silk-road-trip.webp"
                    className={styles.card__img}
                    alt="kuala-lumpur"
                    width={0}
                    height={0}
                  />
                  <div className={styles.card__body}>
                    <h2 className={styles.card__title}>
                      {item.heading}-{i}
                    </h2>
                    <p className={styles.card__description}>{item.content}</p>
                    <div className={styles.card_read}>
                      <p className={styles.readMore}>Read Article</p>
                      <p className={styles.card_releaseDate}>
                      <i class="fa fa-calendar-days"></i> Aug 21
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
      {/* {device !== 'Mobile' && ( */}
        <>
          <button
            className={classNames(
              styles.carousel_button,
              styles.left_carousel_button
            )}
            onClick={handlePrevButton}
          >
            <span className={styles.arrow}>&#x276E;</span>
          </button>
          <button
            className={classNames(
              styles.carousel_button,
              styles.right_carousel_button
            )}
            onClick={handleNextButton}
          >
            <span className={styles.arrow}>&#x276F;</span>
          </button>
        </>
      {/* )} */}
    </div>
  );

}

export default HomeCard