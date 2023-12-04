import './App.css';

function App() {
  return (
    <>
      {/* start navbar section */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light  navBar ">
        <div className="container  justify-content-around ">
          <a className="navbar-brand" href="#">
            <img src="img\logo.png" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div
          className="collapse navbar-collapse justify-content-around "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                about
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                products
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#" tabIndex={-1} aria-disabled="true">
                privacy
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* end navbar ssection  */}
      {/* start header section */}
      <section className="container-fluid header">
        <div className="row ">
          <div className="col-sm-12 col-md-12 col-lg-8  col-xl-8 m-auto">
            <h1>select your new perfect style </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut rerum
              vitae saepe harum tempora, iusto eaque quas porro labore non.
            </p>
            <button className="btn btn-danger bttn ">SHOP NOW</button>
          </div>
          <div className="col-lg-4 col-xl-4  r-side">
            <img src="img/watch.png" />
          </div>
        </div>
      </section>
      {/* start end section */}
      {/* start second section */}
      <section className="container  new-products ">
        <div className="row">
          <div className="row col-12 ">
            <h1>new products</h1>
          </div>
          <div className="row prod ">
            <div className="col-sm-12   col-md-4 col-lg-4  col-xl-4 ">
              <img src=" img/new_product1.png" />
              <h2>blue watch</h2>
              <p>$50.500</p>
            </div>
            <div className="col-sm-12     col-md-4 col-lg-4  col-xl-4 ">
              <img src="img/new_product3.png" />
              <h2>blue watch</h2>
              <p>$50.500</p>
            </div>
            <div className="col-sm-12   col-md-4 col-lg-4  col-xl-4 ">
              <img src="img/new_product2.png" />
              <h2>blue watch</h2>
              <p>$50.500</p>
            </div>
          </div>
        </div>
      </section>
      {/* end second section */}
      {/* start third section */}
      <section className="gallery">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-lg-6 col-md-6  ">
              <div className="single-gallery">
                <div
                  className="galler-img big-img"
                  style={{ backgroundImage: "url(img/gallery1.png)" }}
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3  ">
              <div className="single-gallery">
                <div
                  className="galler-img big-img"
                  style={{ backgroundImage: "url(img/gallery2.png)" }}
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 ">
              <div className="row">
                <div className="single-gallery">
                  <div
                    className="galler-img small-img"
                    style={{ backgroundImage: "url(img/gallery3.png)" }}
                  />
                </div>
                <div className="single-gallery">
                  <div
                    className="galler-img small-img"
                    style={{ backgroundImage: "url(img/gallery4.png)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end third section */}
      {/* satrt fourth section */}
      <section className="popular-items">
        <div className="container">
          <div className="row">
            <div className="text">
              <h1>popular items</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                accusantium a aperiam incidunt dolore nam eaque maxime dignissimos
                illo iusto.
              </p>
            </div>
            <div className="row">
              <div className="box col-lg-4 col-md-4 col-xl-4 col-sm-12 ">
                <div className="watch">
                  <img src="img/popular1.png" className="img-fluid " />
                  <i className="far fa-heart" />
                  <a href="#">add to cart</a>
                </div>
                <div className="text">
                  <h3>
                    <a href="#">Thermo Ball Etip Gloves</a>
                  </h3>
                  <p>$ 45,743</p>
                </div>
              </div>
              <div className="box col-lg-4 col-md-4 col-xl-4 col-sm-12 ">
                <div className="watch">
                  <img src="img/popular2.png" className="img-fluid " />
                  <i className="far fa-heart" />
                  <a href="#">add to cart</a>
                </div>
                <div className="text">
                  <h3>
                    <a href="#">Thermo Ball Etip Gloves</a>
                  </h3>
                  <p>$ 45,743</p>
                </div>
              </div>
              <div className="box col-lg-4 col-md-4 col-xl-4 col-sm-12 ">
                <div className="watch">
                  <img src="img/popular3.png" className="img-fluid " />
                  <i className="far fa-heart" />
                  <a href="#">add to cart</a>
                </div>
                <div className="text">
                  <h3>
                    <a href="#">Thermo Ball Etip Gloves</a>
                  </h3>
                  <p>$ 45,743</p>
                </div>
              </div>
              <div className="box col-lg-4 col-md-4 col-xl-4 col-sm-12 ">
                <div className="watch">
                  <img src="img/popular4.png" className="img-fluid " />
                  <i className="far fa-heart" />
                  <a href="#">add to cart</a>
                </div>
                <div className="text">
                  <h3>
                    <a href="#">Thermo Ball Etip Gloves</a>
                  </h3>
                  <p>$ 45,743</p>
                </div>
              </div>
              <div className="box col-lg-4 col-md-4 col-xl-4 col-sm-12 ">
                <div className="watch">
                  <img src="img/popular5.png" className="img-fluid " />
                  <i className="far fa-heart" />
                  <a href="#">add to cart</a>
                </div>
                <div className="text">
                  <h3>
                    <a href="#">Thermo Ball Etip Gloves</a>
                  </h3>
                  <p>$ 45,743</p>
                </div>
              </div>
              <div className="box col-lg-4 col-md-4 col-xl-4 col-sm-12 ">
                <div className="watch">
                  <img src="img/popular6.png" className="img-fluid " />
                  <i className="far fa-heart" />
                  <a href="#">add to cart</a>
                </div>
                <div className="text">
                  <h3>
                    <a href="#">Thermo Ball Etip Gloves</a>
                  </h3>
                  <p>$ 45,743</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* satrt fourth section */}
      {/* start fifth section */}
      <section className="show-watch">
        <div className="container">
          <div className="row">
            <div className="text col-lg-6 col-md-6 col-sm-12">
              <h2>wacth of choice</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                laboriosam illo libero odio, quo vel sed, provident ab atque soluta
                velit nisi a corporis deleniti consequatur cumque vero neque
                accusantium magni et, ipsam delectus facere. Nostrum modi saepe
                dolor rem?
              </p>
              <button className="btn btn-danger ">show watces</button>
            </div>
            <div className="show-watch col-lg-6 col-md-6 col-sm-12">
              <img src="img/choce_watch1.png" />
            </div>
          </div>
        </div>
      </section>
      {/* end fifth section */}
      {/* start sixth section  */}
      <section className="show-watch">
        <div className="container">
          <div className="row">
            <div className=" col-lg-6 col-md-6 col-sm-12 ">
              <img src="img/choce_watch2.png" alt="" />
            </div>
            <div className="text col-lg-6 col-md-6 col-sm-12 ">
              <h2>watch choice</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
                possimus fugit quod aliquid unde earum perspiciatis error, cumque
                recusandae cum commodi nostrum quasi culpa quidem asperiores, quae,
                optio incidunt aperiam soluta. Assumenda sit ut odio dicta,
                voluptatum exercitationem non eius unde iure alias sunt atque
                tempore ducimus sequi officiis quibusdam.
              </p>
              <button className="btn btn-danger ">SHOW WATCHES</button>
            </div>
          </div>
        </div>
      </section>
      {/* end sixth section  */}
      {/* start sevetnth section  */}
      <section className="service">
        <div className="container">
          <div className="row">
            <div className="text col-lg-4 col-md-4  col-sm-12 ">
              <div>
                <i className="fas fa-cube" />
                <h5>watch of choices </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, repudiandae.
                </p>
              </div>
            </div>
            <div className="text col-lg-4 col-md-4  col-sm-12 ">
              <div>
                <i className="fas fa-unlock-alt" />
                <h5>watch of choices </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, repudiandae.
                </p>
              </div>
            </div>
            <div className="text col-lg-4 col-md-4  col-sm-12 ">
              <div>
                <i className="fas fa-sync" />
                <h5>watch of choices </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, repudiandae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end sevetnth section  */}
      {/* ---------------------------------- footer---------------- */}
      {/* Footer */}
      <footer className="text-center text-lg-start bg-light text-muted">
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4 mt-4 ">
                  <img src="img/logo2_footer.png" alt="" />
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4 mt-4 ">quick links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    about
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    offers
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    get cupon
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    contact us
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-4 ">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">new-products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    woman cloth
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    faschion accesories
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    man accesories
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    rubber nade toys
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-4 ">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">support</h6>
                <p>
                  <i className="fas fa-home me-3" /> frequently asked question
                </p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  terms and condition
                </p>
                <p>
                  <i className="fas fa-phone me-3" /> privacy policey{" "}
                </p>
                <p>
                  <i className="fas fa-print me-3" /> reports and payments
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
      </footer>
    </>

  );
}

export default App;
