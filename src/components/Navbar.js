import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          BizCard
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/login">
                👨🏻‍💻
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                📝
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AddCard">
                ➕
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-success" type="submit">
              🔎
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
