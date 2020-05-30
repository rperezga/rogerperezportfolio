import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';

export default class Porfolio extends Component {

  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div>
              {resumeData.portfolio && resumeData.portfolio.map((item) => {
                return (
                  <div>
                    <h4>{item.name}</h4>
                    <Gallery images={item.images} />
                    <div style={{ marginTop: 20 }}></div>
                    <hr />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
