import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog = () => {
  return (
    <>
      <div className="author-card">
        <h4 className="author-title">AUTHOR</h4>
        <div className="author-image">
          <img src="https://www.dummyimage.com/300" alt="Author Image" />
        </div>
        <h3 className="author-name">
          HI THERE, I&apos;M <span className="highlight">KATHY</span>
        </h3>
        <p className="author-desc">
          This blog will provide you many tested tips and advice about traveling
          anywhere without spending a fortune
        </p>
      </div>
      <div className="blog-card">
        <div className="blog-image">
          <Image
            src="/images/piatra-craiului-national-park-romania.jpg"
            alt="piatra-craiului-national-park-romania"
            width={0}
            height={0}
          />
        </div>
        <div className="blog-content">
          <h2 className="blog-title">Trip to Italy: Rome</h2>
          <p className="blog-meta">
            <span className="icon">🏷️</span> POSTED IN EUROPE
            <span className="icon">👤</span> KATHY
          </p>
          <p className="blog-description">
            This post is part of a series called Travel to Italy Palatine Hill.
            Aliquam sit amet euismod purus, sed commodo ipsum. Morbi sodales
            consectetur ex vitae molestie. Morbi ultrices rhoncus...
          </p>
          <a href="#" className="read-more">
            CONTINUE READING
          </a>
        </div>
      </div>
               <div className="popular-posts">
      <h2>Popular Posts</h2>

      <div className="post">
        <img
          src="https://dummyimage.com/300x150/b0b0b0/d3d5eb"
          alt="Milan"
        />
        <div className="post-content">
          <p className="post-title">Trip to Italy: Milan</p>
          <p className="post-date"><i className="fa fa-bookmark"></i>January 7, 2018</p>
        </div>
      </div>

      <div className="post">
        <img
          src="https://dummyimage.com/300x150/b0b0b0/d3d5eb"
          alt="Piatra Craiului"
        />
        <div className="post-content">
          <p className="post-title">Piatra Craiului, Romania</p>
          <p className="post-date"><i className="fa fa-bookmark"></i>January 6, 2018</p>
        </div>
      </div>

      <div className="post">
        <img
          src="https://dummyimage.com/300x150/b0b0b0/d3d5eb"
          alt="Fuerteventura"
        />
        <div className="post-content">
          <p className="post-title">Fuerteventura, Spain</p>
          <p className="post-date"><i className="fa fa-bookmark"></i>January 5, 2018</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Blog;
