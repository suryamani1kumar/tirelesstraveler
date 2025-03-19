const Footer = () => {
  return (
    <div className="footer">
      <div className="container mx-auto px-4">
        <div className="stats-container">
          <div className="stat">
            <i className="fa fa-globe"></i>
            <h2>4 Continents</h2>
            <p>Explored</p>
          </div>
          <div className="stat">
            <i className="fa fa-plane"></i>
            <h2>30 Countries</h2>
            <p>Visited</p>
          </div>
          <div className="stat">
            <i className="fa fa-globe"></i>
            <h2>250,000 KM</h2>
            <p>Traveled</p>
          </div>
          <div className="stat">
            <i className="fa fa-image"></i>
            <h2>15,000 Photos</h2>
            <p>Taken</p>
          </div>
        </div>
      </div>
      <p className="py-4 text-center">
        © {new Date().getFullYear()}. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
