import React from 'react'

function Services() {
  return (
   <>
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
   
   </>
  )
}

export default Services