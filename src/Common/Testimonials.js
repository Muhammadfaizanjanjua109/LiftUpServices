import React from 'react'

function Testimonials() {
  return (
    <>
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
    </>
  )
}

export default Testimonials