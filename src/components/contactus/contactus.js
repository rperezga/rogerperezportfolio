import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below.
              </p>
          </div>
        </div>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {
                resumeData.socialLinks && resumeData.socialLinks.map((item) => {
                  return (
                    <li key={item.name}>
                      <a href={item.url} target="_blank"><i className={item.className}></i></a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </section>
    );
  }
}