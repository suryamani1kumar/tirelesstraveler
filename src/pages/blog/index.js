import Image from 'next/image';
import React from 'react';
import styles from '../../styles/blog.module.css';
import Link from 'next/link';

const Blog = () => {
  return (
    <div>
      <div
        className="banner_blog"
        style={{
          background: 'url(/images/blog_banner.webp) center center no-repeat',
          backgroundSize: 'cover',
        }}
      >
        Blog
      </div>
      <div className="container mx-auto px-4">
        <div className="flex justifty-sapce bloglistcard">
          <div>
            {Array(4)
              .fill(0)
              .map((item, i) => (
                <div className="blog-card" key={i}>
                  <div className="blog-image">
                    <Image
                      src="/images/silk-road-trip.webp"
                      alt="silk-road-trip"
                      width={0}
                      height={0}
                    />
                  </div>
                  <div className="blog-content">
                    <h2 className="blog-title">Trip to Italy: Rome</h2>
                    <p className="blog-meta">
                      <span className="icon">🏷️</span> POSTED IN EUROPE
                      <span className="icon"> 👤</span>Arvi
                    </p>
                    <p className="blog-description">
                      This post is part of a series called Travel to Italy
                      Palatine Hill. Aliquam sit amet euismod purus, sed commodo
                      ipsum. Morbi sodales consectetur ex vitae molestie. Morbi
                      ultrices rhoncus...
                    </p>
                    <Link href="/blog/sdasdsdasd" className="read-more">
                      CONTINUE READING
                    </Link>
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-6">
            <div className="author-card">
              <h4 className="author-title">AUTHOR</h4>
              <div className="author-image">
                <img src="https://www.dummyimage.com/300" alt="Author Image" />
              </div>
              <h3 className="author-name">
                HI THERE, I&apos;M <span className="highlight">Arvi</span>
              </h3>
              <p className="author-desc">
                This blog will provide you many tested tips and advice about
                traveling anywhere without spending a fortune
              </p>
            </div>
            <div className="categories">CATEGORIES</div>
            <ul className="category-list">
              <li className="expandable">
                <i className="fa fa-chevron-right"></i>Europe
              </li>
              <li className="expandable">
                <i className="fa fa-chevron-right"></i>Mountains
              </li>
              <li className="expandable">
                <i className="fa fa-chevron-right"></i>Other
              </li>
              <li className="expandable">
                <i className="fa fa-chevron-right"></i>Seas
              </li>
            </ul>
            <div className="popular-posts">
              <h2>Popular Posts</h2>
              {Array(3)
                .fill(0)
                .map((item, i) => (
                  <div className="popular-post" key={i}>
                    <div className="postimgcontainer">
                      <Image
                        src="/images/silk-road-trip.webp"
                        alt="silk-road-trip"
                        width={0}
                        height={0}
                      />
                    </div>

                    <div className="popular-post-content">
                      <p className="popular-post-title">Trip to Italy: Milan</p>
                      <p className="popular-post-date">
                        <i className="fa fa-bookmark mr-2"></i>January 7, 2018
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Blog;
