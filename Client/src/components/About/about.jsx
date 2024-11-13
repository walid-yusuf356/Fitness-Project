import img from "../../assets/images/AboutGirl.png";
import "./about.css";
const about = () => {
  return (
    <section className="main_about_wrapper">
      <div className="about_wrapper d-flex flex-column flex-md-row">
        <div className="img-about col-md-6">
          <img className="rounded" src={img} alt="about girl" />
        </div>
        {/* right/upper content */}
        <div className="right-about col-md-6">
          <div className="upper-content">
            {/* title */}
            <div className="upper-title">
              Unleash
              <br />
              Your Poten...
            </div>
            {/* text */}
            <p className="upper-text mt-3">
              At our platform, we believe that true wellness is about more than just physical fitness. It is a holistic journey that
              <br /> encompasses mental, emotional, and spiritual well-being.
              <br /> That is why we have curated a comprehensive suite of 
              <br /> resources and tools to support you every step of the way
            </p>
          </div>
          {/* bottom content */}
          <div className="bottom-content">
            <p className="small-text">Explore Nov</p>
            <h2 className="bottom-title">Discover Our Activewear</h2>
            <p className="about-text">
              Join our vibrant community of wellness enthusiasts and unlock a
              world of support, inspiration, and guidance. Together, we will
              explore innovative practices, share insights, and cultivate a
              transformative approach to self-care
            </p>
          </div>
          <button className="shop-btn btn btn-dark rounded-pill" type="submit">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default about;
