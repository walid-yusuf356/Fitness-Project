// import link and useRouter
import { Link } from "react-router-dom";
import img from "../../assets/images/not-found.png";

const NotFound = () => {
  if (img) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center mt-5 h-100">
        <img
          src={img}
          alt="not found"
          className="mb-2"
          style={{ maxWidth: "800px" }}
        />
        <h3>Ohh! Page Not Found</h3>
        <p>We can not seem to find the page you are looking for</p>
        <Link
          to="/home"
          className="btn rounded-pill mt-3"
          style={{ backgroundColor: "#ECC06C" }}
        >
          Go back to home
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h3>Page Not Found</h3>
    </div>
  );
};

export default NotFound;
