import React, { Component } from 'react';
import { Modal } from './Modal';

class Portfolio extends Component {
  toggle(e) {
    e.preventDefault()
    document.getElementById(e.currentTarget.name)
      .classList
      .toggle('mfp-hide')
  }
  render() {
    if (this.props.data) {
        var portfolio = this.props.data.projects.map((project) => {
            return (
                <div key={project.title}>
                    <div className="columns portfolio-item">
                        <div className="item-wrap">
                            <a onClick={this.toggle} name={project.modal} title={project.title}>
                                <img alt={project.title} src={`images/portfolio/${project.image}`} />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>{project.title}</h5>
                                        <p>{project.category}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            )
        });
    }
    return (
        <section id="portfolio">
        <div className="row">
           <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                   {portfolio}
  
              </div> 
  
           </div>
  
           
            {this.props.data && this.props.data.projects.map(project => <Modal {...project} />)}
  
           {/* 
  
           <div id="modal-02" className="popup-modal mfp-hide">
  
                <img className="scale-with- grid" src="images/portfolio/modals/m-console.jpg" alt="" />
  
                <div className="description-box">
                    <h4>Console</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                 <span className="categories"><i className="fa fa-tag"></i>Branding, Web Development</span>
                </div>
  
              <div className="link-box">
                 <a href="http://www.behance.net">Details</a>
                   <a className="popup-modal-dismiss">Close</a>
              </div>
  
            </div>
  
           <div id="modal-03" className="popup-modal mfp-hide">
  
                <img className="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt="" />
  
                <div className="description-box">
                    <h4>Judah</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                 <span className="categories"><i className="fa fa-tag"></i>Branding</span>
                </div>
  
              <div className="link-box">
                 <a href="http://www.behance.net">Details</a>
                   <a className="popup-modal-dismiss">Close</a>
              </div>
  
            </div>
  
           <div id="modal-04" className="popup-modal mfp-hide">
  
                <img className="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt="" />
  
                <div className="description-box">
                    <h4>Into the Light</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                 <span className="categories"><i className="fa fa-tag"></i>Photography</span>
                </div>
  
              <div className="link-box">
                 <a href="http://www.behance.net">Details</a>
                   <a className="popup-modal-dismiss">Close</a>
              </div>
  
            </div>
  
           <div id="modal-05" className="popup-modal mfp-hide">
  
                <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt="" />
  
                <div className="description-box">
                    <h4>Farmer Boy</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                 <span className="categories"><i className="fa fa-tag"></i>Branding, Webdesign</span>
                </div>
  
              <div className="link-box">
                 <a href="http://www.behance.net">Details</a>
                   <a className="popup-modal-dismiss">Close</a>
              </div>
  
            </div>
  
           <div id="modal-06" className="popup-modal mfp-hide">
  
                <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt="" />
  
                <div className="description-box">
                    <h4>Girl</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                 <span className="categories"><i className="fa fa-tag"></i>Photography</span>
                </div>
  
              <div className="link-box">
                 <a href="http://www.behance.net">Details</a>
                   <a className="popup-modal-dismiss">Close</a>
              </div>
  
            </div>
  
           <div id="modal-07" className="popup-modal mfp-hide">
  
                <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt="" />
  
                <div className="description-box">
                    <h4>Origami</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                 <span className="categories"><i className="fa fa-tag"></i>Branding, Illustration</span>
                </div>
  
              <div className="link-box">
                 <a href="http://www.behance.net">Details</a>
                   <a className="popup-modal-dismiss">Close</a>
              </div>
  
            </div>
  
           <div id="modal-08" className="popup-modal mfp-hide">
  
                <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt="" />
  
                <div className="description-box">
                    <h4>Retrocam</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                 <span className="categories"><i className="fa fa-tag"></i>Webdesign, Photography</span>
                </div>
  
              <div className="link-box">
                 <a href="http://www.behance.net">Details</a>
                   <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
  
        
   */}
   </div> 
     </section>
    );
  }
}

export default Portfolio;
