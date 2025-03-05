import React from 'react';

const BlogDetails = () => {
  return (
    <div>
      <iframe
        id="mapFrame"
        src="https://www.google.com/maps?q=Eiffel+Tower,Paris&output=embed"
        style={{ border: 0, height: '50vh', width: '98.85vw' }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container mx-auto px-4">
        <div className="related-posts">
          <h3>You May Also Like</h3>
          <div className="posts">
            <div className="post">
              <img
                src="https://dummyimage.com/390x200/cfc0cf/ffffff"
                alt="Weekend in Warsaw"
              />
              <a href="#">Weekend in Warsaw </a>

              <span>
                <button className="button">Continue Reading</button>
              </span>
            </div>
            <div className="post">
              <img
                src="https://dummyimage.com/390x200/cfc0cf/ffffff"
                alt="Two Days in Budapest"
              />
              <a href="#">Two Days in Budapest</a>

              <span>
                <button className="button">Continue Reading</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
