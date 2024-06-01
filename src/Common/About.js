import React from 'react'
import about from '../assets/images/about.gif'
import Image from 'next/image'
import Head from 'next/head'
function About() {
  return (
    <>

    <Head>
    <meta property="og:url" content="https://www.liftupservices.com/about-us" />  {/* Replace with your actual URL */}
  <meta property="og:title" content="LiftUpServices: About Us" />
  <meta property="og:description" content="LiftUpServices empowers businesses with cutting-edge digital marketing, SEO, and WordPress solutions. We help businesses of all sizes grow their online presence and achieve their goals." />
  <meta property="og:image" content='../assets/images/about.gif' />  {/* Replace with your image URL */}

    </Head>
     <div className="container aos-init aos-animate" data-aos="fade-up">

<div className="row">
  <div className="col-lg-6 order-1 order-lg-2 aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
    <Image src={about} className="img-fluid" alt="About Image of LiftupService" />
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
    </>
  )
}

export default About