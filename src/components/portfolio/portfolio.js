import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';

export default class Porfolio extends Component {

  render() {
    let resumeData = this.props.resumeData;

    const IMAGES =
      [{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
        caption: "Boats (Jeshu John - designerspics.com)"
      }]

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
