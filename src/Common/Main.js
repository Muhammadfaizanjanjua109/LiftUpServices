'use client'
import React, { useState } from 'react'
import about from '../assets/images/about.gif'
import scamwatch from '../assets/svg/scamwatch.png'
import GitHub from '../assets/svg/GitHub-logo.png'
import forensic from '../assets/svg/forensic-focus-logo.png'
import commingSoon from '../assets/svg/commingSoon.png'
import Image from 'next/image'

function Main() {

  const [state,setState] = useState('')
  return (
<>

<main id="main">

    {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about">
      <div className="container aos-init aos-animate" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2 aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
            <Image src={about} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
  <h3>About LiftUpServices</h3>
  <p className="fst-italic">
    At LiftUpServices, we're dedicated to empowering businesses through cutting-edge digital marketing, SEO, and WordPress solutions.
  </p>
  <ul>
    <li><i className="ri-check-double-line"></i> Our team comprises passionate professionals committed to boosting your online presence.</li>
    <li><i className="ri-check-double-line"></i> We offer tailored services to meet the diverse needs of businesses of all sizes.</li>
    <li><i className="ri-check-double-line"></i> LiftUpServices provides personalized consultancy services to address your unique challenges.</li>
    <li><i className="ri-check-double-line"></i> We stay ahead of the curve by leveraging the latest research and innovations in digital marketing and SEO.</li>
  </ul>
  <p>
    With a relentless pursuit of excellence, we aim to elevate your digital footprint and drive tangible results. Our team combines expertise, creativity, and dedication to deliver impactful solutions. Partner with LiftUpServices to soar above the competition and achieve your online goals.
  </p>
</div>

        </div>

      </div>
    </section>
    {/* <!-- End About Section --> */}

    {/* <!-- ======= Clients Section ======= --> */}
    {/* <section id="clients" className="clients">
      <div className="container aos-init aos-animate" data-aos="zoom-in">

        <div className="clients-slider swiper swiper-initialized swiper-horizontal swiper-pointer-events">
          <div className="swiper-wrapper align-items-center" id="swiper-wrapper-104db52282b10b92dc" aria-live="off" style="transform: translate3d(-2266px, 0px, 0px); transition-duration: 0ms;"><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" style="width: 86px; margin-right: 120px;" role="group" aria-label="3 / 8"><img src="assets/img/clients/client-3.png" className="img-fluid" alt=""></div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="3" style="width: 86px; margin-right: 120px;" role="group" aria-label="4 / 8"><img src="assets/img/clients/client-4.png" className="img-fluid" alt=""></div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="4" style="width: 86px; margin-right: 120px;" role="group" aria-label="5 / 8"><img src="assets/img/clients/client-5.png" className="img-fluid" alt=""></div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="5" style="width: 86px; margin-right: 120px;" role="group" aria-label="6 / 8"><img src="assets/img/clients/client-6.png" className="img-fluid" alt=""></div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="6" style="width: 86px; margin-right: 120px;" role="group" aria-label="7 / 8"><img src="assets/img/clients/client-7.png" className="img-fluid" alt=""></div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="7" style="width: 86px; margin-right: 120px;" role="group" aria-label="8 / 8"><img src="assets/img/clients/client-8.png" className="img-fluid" alt=""></div>
            <div className="swiper-slide" data-swiper-slide-index="0" style="width: 86px; margin-right: 120px;" role="group" aria-label="1 / 8"><img src="assets/img/clients/client-1.png" className="img-fluid" alt=""></div>
            <div className="swiper-slide" data-swiper-slide-index="1" style="width: 86px; margin-right: 120px;" role="group" aria-label="2 / 8"><img src="assets/img/clients/client-2.png" className="img-fluid" alt=""></div>
            <div className="swiper-slide" data-swiper-slide-index="2" style="width: 86px; margin-right: 120px;" role="group" aria-label="3 / 8"><img src="assets/img/clients/client-3.png" className="img-fluid" alt=""></div>
            <div className="swiper-slide" data-swiper-slide-index="3" style="width: 86px; margin-right: 120px;" role="group" aria-label="4 / 8"><img src="assets/img/clients/client-4.png" className="img-fluid" alt=""></div>
            <div className="swiper-slide swiper-slide-prev" data-swiper-slide-index="4" style="width: 86px; margin-right: 120px;" role="group" aria-label="5 / 8"><img src="assets/img/clients/client-5.png" className="img-fluid" alt=""></div>
            <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="5" style="width: 86px; margin-right: 120px;" role="group" aria-label="6 / 8"><img src="assets/img/clients/client-6.png" className="img-fluid" alt=""></div>
            <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="6" style="width: 86px; margin-right: 120px;" role="group" aria-label="7 / 8"><img src="assets/img/clients/client-7.png" className="img-fluid" alt=""></div>
            <div className="swiper-slide" data-swiper-slide-index="7" style="width: 86px; margin-right: 120px;" role="group" aria-label="8 / 8"><img src="assets/img/clients/client-8.png" className="img-fluid" alt=""></div>
          <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" style="width: 86px; margin-right: 120px;" role="group" aria-label="1 / 8"><img src="assets/img/clients/client-1.png" className="img-fluid" alt=""></div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="1" style="width: 86px; margin-right: 120px;" role="group" aria-label="2 / 8"><img src="assets/img/clients/client-2.png" className="img-fluid" alt=""></div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" style="width: 86px; margin-right: 120px;" role="group" aria-label="3 / 8"><img src="assets/img/clients/client-3.png" className="img-fluid" alt=""></div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="3" style="width: 86px; margin-right: 120px;" role="group" aria-label="4 / 8"><img src="assets/img/clients/client-4.png" className="img-fluid" alt=""></div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="4" style="width: 86px; margin-right: 120px;" role="group" aria-label="5 / 8"><img src="assets/img/clients/client-5.png" className="img-fluid" alt=""></div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="5" role="group" aria-label="6 / 8" style="width: 86px; margin-right: 120px;"><img src="assets/img/clients/client-6.png" className="img-fluid" alt=""></div></div>
          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span><span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span><span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span><span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 4"></span><span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 5"></span><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 6" aria-current="true"></span><span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 7"></span><span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 8"></span></div>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>

      </div>
    </section> */}
    
    {/* <!-- End Clients Section --> */}

    {/* <!-- ======= Features Section ======= --> */}
    <section id="services" className="features">
  <div className="container aos-init aos-animate" data-aos="fade-up">
    <div className="row">
      <div className="image col-lg-6 aos-init aos-animate bg-customFaizan" data-aos="fade-right"></div>
      <div className="col-lg-6 aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
        <h3 className='services_heading text-center'>Our Services</h3>
        <div className="icon-box mt-5 mt-lg-0 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
          <i className="bx bx-receipt"></i>
          <h4>Digital Marketing</h4>
          <p>Strategic planning and execution of digital marketing campaigns to boost your online presence and drive customer engagement.</p>
        </div>
        <div className="icon-box mt-5 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
          <i className="bx bx-cube-alt"></i>
          <h4>SEO</h4>
          <p>Optimization of your website to improve search engine rankings and increase organic traffic, enhancing your visibility online.</p>
        </div>
        <div className="icon-box mt-5 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
          <i className="bx bx-images"></i>
          <h4>Content Writing</h4>
          <p>Creation of compelling and engaging content tailored to your audience, driving brand awareness and customer engagement.</p>
        </div>
        <div className="icon-box mt-5 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
          <i className="bx bx-shield"></i>
          <h4>WordPress Development</h4>
          <p>Customized WordPress solutions designed to meet your specific business needs, delivering a seamless and user-friendly website experience.</p>
        </div>
        <div className="icon-box mt-5 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
          <i className="bx bx-shield"></i>
          <h4>Custom Web Development</h4>
          <p>Bespoke web development services tailored to your requirements, ensuring a unique and innovative online presence for your business.</p>
        </div>
      </div>
    </div>
  </div>
</section>

    


<section id="resources"  className=" services">
  <div className="container">
    <div className="section-title">
      <h2>Our Partners' Testimonials</h2>
      <p>What Our Fake European Partners Say About Us</p>
    </div>

    <div className="row">
      <div className="col-lg-6">
        <div className="testimonial-wrap">
          <div className="testimonial-item aos-init aos-animate" data-aos="fade-up">
            <div className="testimonial-content">
              <p>
                "LiftUpServices has been instrumental in transforming our digital presence. Their expertise in digital marketing and SEO strategies has significantly boosted our online visibility and customer engagement."
              </p>
              <h3>Johan Svensson</h3>
              <h4>CEO of EuroTech Solutions</h4>
              <div className="stars">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star-half"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="testimonial-wrap">
          <div className="testimonial-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div className="testimonial-content">
              <p>
                "We are extremely satisfied with the services provided by LiftUpServices. Their content writing and WordPress development expertise have helped us create a professional and user-friendly website."
              </p>
              <h3>Ana Petrova</h3>
              <h4>Marketing Manager at EuroConnect</h4>
              <div className="stars">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star-half"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    {/* <!-- End Features Section --> */}

{/* start of resources section */}

{/* <section id="resources" className="services">
  <div className="container">
    <div className="section-title">
      <h2>Resources</h2>
      <p>Explore Our Resources</p>
    </div>

    <div className="d-flex justify-content-center p-2 w-100 mob">
      <div className="w-20  ms-1 me-1 mob-div">
        <a href='https://www.scamwatch.gov.au' target="_blank" className="card p-3 cardHeight  d-flex justify-content-center align-items-center" >
          <div className=" "><Image width={200} src={scamwatch} alt='scamWatch' /></div>
          <h4><p className='font-size-15'>Scamwatch</p></h4>
        </a>
      </div>
 

      <div className="w-20  ms-1 me-1 mob-div">
        <a href='https://www.forensicfocus.com' target="_blank" className="card p-3 cardHeight d-flex justify-content-center align-items-center"  >
          <div className=" "><Image width={200}  src={forensic} alt='scamWatch' /></div>
          <h4><p className='font-size-15 '>Forensic Focus</p></h4>
        </a>
      </div>

      <div className="w-20  ms-1 me-1 mob-div">
        <a href='https://github.com/forensicswiki/wiki' target="_blank" className="card p-3 cardHeight  d-flex justify-content-center align-items-center" >
          <div className=" "><Image width={150}  src={GitHub} alt='scamWatch' /></div>
          <h4><p className='font-size-15'>ForensicsWiki</p></h4>
        </a>
      </div>


      <div className="w-20  ms-1 me-1 mob-div">
        <a href='https://github.com/cugu/awesome-forensics' target="_blank" className="card p-3 cardHeight  d-flex justify-content-center align-items-center" >
          <div className=" "><Image width={150}  src={GitHub} alt='scamWatch' /></div>
          <h4><p className='font-size-15'>Awesome Forensics</p></h4>
        </a>
      </div>
     
      <div className="w-20  ms-1 me-1 mob-div">
        <a href='#' className="card p-3 cardHeight  d-flex justify-content-center align-items-center" >
          <div className=" "><Image width={200} src={commingSoon} alt='scamWatch' /></div>
          <h4><p className='font-size-15'>Learning Management System</p></h4>
        </a>
      </div>
      
     
    </div>

  </div>
</section> */}

{/* end of resources section */}

















<section id="cources" className="services">
  <div className="container">
    <div className="section-title">
      <h2>Courses</h2>
      <p>Explore Our Services</p>
    </div>

    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="icon-box" data-bs-toggle="modal" data-bs-target="#exampleModal" >
          <div className="icon"><i className="bx bxl-dribbble"></i></div>
          <h4><a  data-toggle="modal" data-target="#cyberSecurityModal">Digital Marketing</a></h4>
          <p>Elevate your online presence and reach your target audience effectively with our digital marketing strategies.</p>
          <button onClick={()=>setState('Digital Marketing')} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#wordpressModal">
            Learn More
          </button>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="icon-box" >
          <div className="icon"><i className="bx bx-file"></i></div>
          <h4><a  data-toggle="modal" data-target="#safeCyberChildrenModal ">Search Engine Optimization (SEO)</a></h4>
          <p>Improve your website's visibility and rank higher in search engine results pages with our SEO techniques.</p>
          <button type="button" onClick={()=>setState('Search Engine Optimization (SEO)')} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#wordpressModal">
            Learn More
          </button>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="icon-box" >
          <div className="icon"><i className="bx bx-tachometer"></i></div>
          <h4><a data-toggle="modal" data-target="#safeCyberElderlyModal">WordPress Development</a></h4>
          <p>Create stunning and functional websites tailored to your business needs using our WordPress development services</p>
          <button type="button" onClick={()=>setState('WordPress Development')} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#wordpressModal">
            Learn More
          </button>
        
        </div>
      </div>
    </div>

  </div>
</section>


{/* <!-- Modal for Digital Marketing --> */}
<div className={`modal fade ${state === 'Digital Marketing' ? 'show ai-styled-modal' : ''}`}  style={{ display: state === 'Digital Marketing' ? 'block' : 'none' }}  id="digitalMarketingModal" tabIndex="-1" aria-labelledby="digitalMarketingModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="digitalMarketingModalLabel">Digital Marketing</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"  onClick={() => setState('')}></button>
      </div>
      <div className="modal-body">
        <p>Elevate your online presence and reach your target audience effectively with our digital marketing strategies.</p>
        <p>Our services include:</p>
        <ul>
          <li>Social media marketing</li>
          <li>Content marketing</li>
          <li>Email marketing</li>
          <li>PPC advertising</li>
          <li>And more...</li>
        </ul>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"  onClick={() => setState('')}>Close</button>
      </div>
    </div>
  </div>
</div>

{/* <!-- Modal for SEO --> */}
<div className={`modal fade ${state === 'Search Engine Optimization (SEO)' ? 'show ai-styled-modal' : ''}`}  style={{ display: state === 'Search Engine Optimization (SEO)' ? 'block' : 'none' }}  id="seoModal" tabIndex="-1" aria-labelledby="seoModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="seoModalLabel">Search Engine Optimization (SEO)</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"  onClick={() => setState('')}></button>
      </div>
      <div className="modal-body">
        <p>Improve your website's visibility and rank higher in search engine results pages with our SEO techniques.</p>
        <p>Our SEO services include:</p>
        <ul>
          <li>Keyword research</li>
          <li>On-page optimization</li>
          <li>Link building</li>
          <li>SEO audits</li>
          <li>And more...</li>
        </ul>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"  onClick={() => setState('')}>Close</button>
      </div>
    </div>
  </div>
</div>

{/* <!-- Modal for WordPress Development --> */}
<div className={`modal fade ${state === 'WordPress Development' ? 'show ai-styled-modal' : ''}`}  style={{ display: state === 'WordPress Development' ? 'block' : 'none' }}  id="wordpressModal" tabIndex="-1" aria-labelledby="wordpressModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="wordpressModalLabel">WordPress Development</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"  onClick={() => setState('')}></button>
      </div>
      <div className="modal-body">
        <p>Create stunning and functional websites tailored to your business needs using our WordPress development services.</p>
        <p>Our WordPress development services include:</p>
        <ul>
          <li>Custom WordPress themes</li>
          <li>Plugin development</li>
          <li>Website migration</li>
          <li>E-commerce solutions</li>
          <li>And more...</li>
        </ul>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"  onClick={() => setState('')}>Close</button>
      </div>
    </div>
    </div> </div>
    {/* <!-- ======= Cta Section ======= --> */}
    <section id="cta" className="cta">
    <div className="container aos-init aos-animate" data-aos="zoom-in">

<div className="text-center">
  <h3>Empower Your Digital Presence Today</h3>
  <p>Take the first step towards elevating your online presence and reaching your target audience effectively. Join us and discover how LiftUpServices can help you thrive in the digital world.</p>
  <a className="cta-btn" href="#services">Explore Our Services</a>
</div>

</div>

</section>
    {/* <!-- End Cta Section --> */}

    {/* <!-- ======= Portfolio Section ======= --> */}
    {/* <section id="portfolio" className="portfolio">
      <div className="container aos-init aos-animate" data-aos="fade-up">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Check our Portfolio</p>
        </div>

        <div className="row aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" style={{position: 'relative', height: '1097.33px'}}>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app" style={{position: 'absolute', left: '0px', top: '0px'}}>
            <div className="portfolio-wrap">
              <Image src={portfolio1} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href={portfolio1} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web" style={{position: 'absolute', left: '380px', top: '0px'}}>
            <div className="portfolio-wrap">
              <Image src={portfolio2} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href={portfolio2} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app" style={{position: 'absolute', left: '760px', top: '0px'}}>
            <div className="portfolio-wrap">
              <Image src={portfolio3} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href={portfolio3} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card" style={{position: 'absolute', left: '760px', top: '230.25px'}}>
            <div className="portfolio-wrap">
              <Image src={portfolio4} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href={portfolio4} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web" style={{position: 'absolute', left: '380px', top: '268.688px'}}>
            <div className="portfolio-wrap">
              <Image src={portfolio5} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href={portfolio5} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app" style={{position: 'absolute', left: '0px', top: '390.891px'}}>
            <div className="portfolio-wrap">
              <Image src={portfolio6} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href={portfolio6} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card" style={{position: 'absolute', left: '760px', top: '495.641px'}}>
            <div className="portfolio-wrap">
              <Image src={portfolio7} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href={portfolio7} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card" style={{position: 'absolute', left: '760px', top: '756.719px'}}>
            <div className="portfolio-wrap">
              <Image src={portfolio8} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href={portfolio8} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web" style={{position: 'absolute', left: '380px', top: '830.844px'}}>
            <div className="portfolio-wrap">
              <Image src={portfolio9} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href={portfolio9} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section> */}
    
    {/* <!-- End Portfolio Section --> */}

    {/* <!-- ======= Counts Section ======= --> */}
    <section id="counts" className="counts">
  <div className="container aos-init aos-animate" data-aos="fade-up">
    <div className="row no-gutters">
      <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start aos-init aos-animate" data-aos="fade-right" data-aos-delay="100"></div>
      <div className="col-xl-7 ps-4 ps-lg-5 pe-4 pe-lg-1 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
        <div className="content d-flex flex-column justify-content-center">
          <h3>Empowering Your Digital Presence</h3>
          <p>
            At LiftUpServices, we are dedicated to helping businesses thrive in the digital world. Our mission is to provide exceptional services that elevate your online presence and drive results.
          </p>
          <div className="row">
            <div className="col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="bi bi-emoji-smile"></i>
                <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="0" className="purecounter">65</span>
                <p><strong>Satisfied Clients</strong> trust us to deliver outstanding digital solutions tailored to their needs.</p>
              </div>
            </div>

            <div className="col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="bi bi-journal-richtext"></i>
                <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="0" className="purecounter">85</span>
                <p><strong>Projects Completed</strong> with excellence, ensuring our clients' digital success.</p>
              </div>
            </div>

            <div className="col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="bi bi-clock"></i>
                <span data-purecounter-start="0" data-purecounter-end="7" data-purecounter-duration="0" className="purecounter">7</span>
                <p><strong>Years of Experience</strong> delivering top-notch digital marketing, SEO, and web development services.</p>
              </div>
            </div>

            <div className="col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="bi bi-award"></i>
                <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="0" className="purecounter">20</span>
                <p><strong>Awards</strong> recognizing our commitment to excellence and innovation in the digital realm.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    {/* <!-- End Counts Section --> */}


    {/* <!-- End Testimonials Section --> */}

    {/* <!-- ======= Team Section ======= --> */}
    {/* <section id="team" className="team">
      <div className="container aos-init aos-animate" data-aos="fade-up">

        <div className="section-title">
          <h2>Team</h2>
          <p>Check our Team</p>
        </div>

        <div className="row">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="">
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div className="member-img">
                <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="">
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
              <div className="member-img">
                <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="">
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
              <div className="member-img">
                <img src={team4} className="img-fluid" alt="" />
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section> */}
    {/* <!-- End Team Section --> */}

    {/* <!-- ======= Contact Section ======= --> */}
    {/* <section id="contact" className="contact">
      <div className="container aos-init aos-animate" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>

        <div>
          <iframe style="border:0; width: 100%; height: 270px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen=""></iframe>
        </div>

        <div className="row mt-5">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">

            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required="" />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required="" />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required="" />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required=""></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section> */}
    




    <section id="contact" className="contact">
  <div className="container aos-init aos-animate" data-aos="fade-up">

    <div className="section-title">
      <h2>Contact Us</h2>
      <p>Get in Touch</p>
    </div>

    <div className="row">

      <div className="col-lg-6">
        <div className="info-box mb-4">
          <i className="bx bx-map"></i>
          <h3>Our Address</h3>
          <p>123 Cybersecurity Street, Digital City, Cyberland</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="info-box  mb-4">
          <i className="bx bx-envelope"></i>
          <h3>Email Us</h3>
          <p>info@upliftServices.com</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="info-box  mb-4">
          <i className="bx bx-phone-call"></i>
          <h3>Call Us</h3>
          <p>+123 456 7890</p>
        </div>
      </div>

    </div>

    <div className="row">
      <div className="col-lg-12 mt-4">
        <form action="#" method="post" role="form" className="php-email-form">
          <div className="row">
            <div className="col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className="form-group mt-3">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>
      </div>
    </div>

  </div>
</section>

    {/* <!-- End Contact Section --> */}

  </main>
</>
  )
}

export default Main