import "./header.css";
import logo from "../../assets/images/fitness-logo-oval-40px.png";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <section>
      <nav className="main_header_wrapper navbar navbar-expand-lg pt-3 ">
        <div className="container ">
          <Link className="navbar-brand d-flex align-items-center gap-3" to="#">
            <img src={logo} alt="" />
            <span className="brand-text">Wellfit</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item nav-link">
                <button className="btn btn-dark rounded-pill" type="submit">
                  Join
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default header;
