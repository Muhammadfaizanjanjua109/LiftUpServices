
import Navbar from "@/Common/Navbar";
import Main from "@/Common/Main";
import Footer from "@/Common/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="hero" className="d-flex align-items-center justify-content-center">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="row justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="150">
            <div className="col-xl-6 col-lg-8">
              <h2 aria-label="LiftUpServices Digital Marketing">LiftUpServices<span>.</span></h2>
              <h2>
                Elevating Your Online Presence through Expert Digital Marketing Solutions.
              </h2>
            </div>
          </div>

          <div className="row gy-4 mt-5 justify-content-center aos-init aos-animate" data-aos="zoom-in" data-aos-delay="250">
            <div className="col-xl-2 col-md-4">
              <div className="icon-box" aria-labelledby="about-link">
                <i className="bx bx-info-square" aria-hidden="true"></i>
                <h3 id="about-link">
                  <a className="nav-link scrollto" href="#about">About</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box" aria-labelledby="services-link">
                <i className="bx bxs-briefcase" aria-hidden="true"></i>
                <h3 id="services-link">
                  <a className="nav-link scrollto" href="#services">Services</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box" aria-labelledby="resources-link">
                <i className="bx bxl-sketch" aria-hidden="true"></i>
                <h3 id="resources-link">
                  <a className="nav-link scrollto" href="#resources">Resources</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box" aria-labelledby="courses-link">
                <i className="bx bxs-book-content" aria-hidden="true"></i>
                <h3 id="courses-link">
                  <a className="nav-link scrollto" href="#cources">Courses</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box" aria-labelledby="contact-link">
                <i className="bx bxs-contact" aria-hidden="true"></i>
                <h3 id="contact-link">
                  <a className="nav-link scrollto" href="#contact">Contact</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Main />

      <Footer />
    </>
  );
}
