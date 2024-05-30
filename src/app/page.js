import Image from "next/image";
import styles from "./page.module.css";
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
              <h1>LiftUpServices<span>.</span></h1>
              <h2>Elevating Your Online Presence through Expert Digital Marketing Solutions.</h2>
            </div>
          </div>

          <div className="row gy-4 mt-5 justify-content-center aos-init aos-animate" data-aos="zoom-in" data-aos-delay="250">
            <div className="col-xl-2 col-md-4" href="#about">
              <div className="icon-box">
                <i className='bx bx-info-square'></i>
                <h3><a className="nav-link scrollto" href="#about">About</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4" href="#services">
              <div className="icon-box">
                <i className='bx bxs-briefcase'></i>
                <h3><a className="nav-link scrollto" href="#services">Services</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4" href="#resources">
              <div className="icon-box">
              <i className='bx bxl-sketch'></i>
                <h3><a className="nav-link scrollto" href="#resources">Resources</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4" href="#cources">
              <div className="icon-box">
                <i className='bx bxs-book-content'></i>
                <h3><a className="nav-link scrollto" href="#cources">Courses</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4" href="#contact">
              <div className="icon-box">
                <i className='bx bxs-contact'></i>
                <h3><a className="nav-link scrollto" href="#contact">Contact</a></h3>
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
