'use client'
import React, { useState } from 'react'

function MoreAboutServices() {
    
  const [state,setState] = useState('')
  return (
   <>
   
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
   </>
  )
}

export default MoreAboutServices