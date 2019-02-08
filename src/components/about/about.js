import React, { Component } from 'react';
export default class About extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="about">
            <div className="row">

               <div className="three columns" id="logo-container">

                  <img src="images/logo-white.png" alt="Roger Perez logo" id="about-logo" />

               </div>

               <div className="nine columns main-col">

                  <h2>About Me</h2>
                  <p>
                     <pre>{resumeData.aboutme}</pre>
                  </p>

                  <div className="row">

                     <div className="columns contact-details">

                        <h2>Contact Details</h2>
                        <p className="address">
                           <ul>
                              <li><pre>{'{'}</pre></li>
                              <li><pre>{resumeData.aboutName}</pre></li>
                              <li><pre>{resumeData.address} </pre></li>
                              <li><pre>{resumeData.email}</pre></li>
                              <li><pre>{resumeData.cellphone}</pre></li>
                              <li><pre>{'}'}</pre></li>
                           </ul>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}
