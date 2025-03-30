
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, } from 'react';
import styles from './BlogCard.module.scss';
import classNames from 'classnames';
const Data = [{
    content:
        'The Silk Road was a trade network linking East and West, exchanging goods, ideas, and cultures, with lasting influence today.',
    pageUrl: '/blog/silk-road-trip',
    heading: 'Silk Road Trip',
    imageName: '/images/trip/silkroad/silk_road_trip_1.webp',
    realaseDate: 'Mar 30',
}, {
    content:
        `Gateway of India, built in 1924, marked British rule's end in 1948. Now, it's a historic Mumbai landmark.`,
    pageUrl: '/blog/gateway-of-india-trip',
    heading: 'Gateway of india Trip',
    imageName: '/images/trip/gatewayofindia/bombay_gateway_to_india.webp',
    realaseDate: 'Mar 30',
},{
    content:
        `Stari Most, built in 1566, symbolizes unity. Rebuilt in 2004 after war destruction, it’s now a UNESCO World Heritage Site.`,
    pageUrl: '/blog/famous-bridge-in-mostar',
    heading: 'famous bridge in Mostar',
    imageName: '/images/trip/mostarbridge/famous_bridge_in_mostar_in_bosnia.webp',
    realaseDate: 'Mar 30',
},{
    content:
        `Rialto Bridge, completed in 1591, symbolizes Venice's history. Spanning the Grand Canal`,
    pageUrl: '/blog/rialto-bridge-trip',
    heading: 'Rialto Bridge trip',
    imageName: '/images/trip/realtobridge/famous_realto_bridge_with_gondolas.webp',
    realaseDate: 'Mar 30',
}];
const HomeCard = () => {

    const tabsContainerRef = useRef(null);
    let isDown = false;
    let startX;
    let scrollLeft;

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
                    {Data.map((item, i) => (
                        <div className={styles.card} key={i}>
                            <Link href={item.pageUrl}>
                                <Image
                                    src={item.imageName}
                                    className={styles.card__img}
                                    alt="kuala-lumpur"
                                    width={0}
                                    height={0}
                                />
                                <div className={styles.card__body}>
                                    <h2 className={styles.card__title}>
                                        {item.heading}
                                    </h2>
                                    <p className={styles.card__description}>{item.content}</p>
                                    <div className={styles.card_read}>
                                        <p className={styles.readMore}>Read Article</p>
                                        <p className={styles.card_releaseDate}>
                                            {item.realaseDate}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>


            {Data.length > 4 && <><button
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
            </>}


        </div>
    );

}

export default HomeCard