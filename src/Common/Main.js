
import dynamic from 'next/dynamic'
import React from 'react'
import Testimonials from './Testimonials'
import MoreAboutServices from './MoreAboutServices'
import Count from './Count'
import ContactUs from './ContactUs'
const About = dynamic(() => import('./About'))
const Services = dynamic(() => import('./Services'))
function Main() {

  return (
<>

<main id="main">

    {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about">
     <About />
    </section>
    {/* <!-- End About Section --> */}

  
    

    {/* <!-- ======= Features Section ======= --> */}
    <section id="services" className="features">
 <Services />
</section>

    


<section id="resources"  className=" services">
 <Testimonials />
</section>
<MoreAboutServices />

    {/* <!-- End Features Section --> */}


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
  
    {/* <!-- End Portfolio Section --> */}

    {/* <!-- ======= Counts Section ======= --> */}
    <section id="counts" className="counts">
<Count/>
</section>

 <ContactUs />

    {/* <!-- End Contact Section --> */}

  </main>
</>
  )
}

export default Main