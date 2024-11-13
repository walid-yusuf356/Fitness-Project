import img from "../../assets/images/landingGirl.png";
// import banner.css
import "./banner.css";

const banner = () => {
  return (
    <section className="main_banner_wrapper">
      <div className="banner_wrapper container pt-4 d-flex flex-column flex-md-row gap-4 justify-content-center align-items-center">
        <div className="img-banner col-md-5">
          <img src={img} alt="Landing girl" className="main-img img-fluid" />
        </div>
        <div className="right-banner col-md-5 d-flex flex-column flex-md-row">
          <div className="banner-content">
            <h1 className="banner-title">
              Elevate Your <br /> Wellness <br /> Journey - Dis...
            </h1>
            <p className="banner-text">
              Welcome to our holistic wellness and fitness <br /> platform,
              where we are dedicated to empowering you <br /> on your journey to
              a healthier, more fulfilling life
            </p>

            <div className="d-flex flex-column flex-md-row flex-lg-column gap-4 pt-5">
              <button
                className="upper-btn btn btn-dark rounded-pill"
                type="submit"
              >
                Join Now
              </button>
              <button type="button" className="lower-btn rounded-pill">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default banner;
