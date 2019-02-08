import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

        <div className="row work">
          <div className="two columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="ten columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>

                  </div>

                )
              })
            }
          </div>
        </div>



        <div className="row education">

          <div className="two columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="ten columns main-col">
            {
              resumeData.education && resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                      {/* <p>
                        {item.Achievements}
                      </p> */}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="row skill">

          <div className="two columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="three columns main-col">
            <ul className="skills">
              {
                resumeData.skills && resumeData.skills.map((item) => {
                  return (
                    <li>
                      <h5>{item.skillname}</h5>
                    </li>
                  )
                })
              }
            </ul>
          </div>

          <div className="three columns main-col">
            <ul className="skills">
              {
                resumeData.skills1 && resumeData.skills1.map((item) => {
                  return (
                    <li>
                      <h5>{item.skillname}</h5>
                    </li>
                  )
                })
              }
            </ul>
          </div>

          <div className="three columns main-col">
            <ul className="skills">
              {
                resumeData.skills2 && resumeData.skills2.map((item) => {
                  return (
                    <li>
                      <h5>{item.skillname}</h5>
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
