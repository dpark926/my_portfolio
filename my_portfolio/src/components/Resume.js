import React from 'react'
import '../styles/Resume.css'

function Resume() {
  return (
    <div className="resume-main">
      <div className="resume-inner">

      <h3>WORK EXPERIENCE</h3>

        <h3>Uniworld Tours</h3>
        <h5>Long Island City, NY</h5>
        <h5>Director of Operations, April 2010 - December 2016</h5>
        <div className="resume-job-details">
          <ul>
            <li>Coordinated, facilitated and managed over 100 travel, meeting and special events for business and tour groups per year</li>
            <li>Negotiated and reviewed contracts for companies such as Google and IBM, including budget and logistics issues to do with facilities, transportation, lodging, food and entertainment activities</li>
          </ul>
        </div>

        <h3>Flaming Cabbage, Wayne, NJ</h3>
        <h5>Co-Founder, February 2008 - June 2009</h5>
        <div className="resume-job-details">
          <ul>
            <li>Built a website from the ground up including establishing web hosting, SSL, merchant services, Google analytics </li>
            <li>Coordinated over 5 web-hosters and designers to enhance website layout </li>
            <li>Collated site analytic data and implemented SEO strategy to drive growth, increasing site traffic by over 50% in the first year </li>
          </ul>
        </div>

        <h3>Best Buy, New York, NY</h3>
        <h5>Internal Auditor, September 2005 - October 2010</h5>
        <ul>
          <li>Identied various sources of risks and liabilities such as theft, fraud and damage </li>
          <li>Trained over 30 employees in areas of inventory control, customer service, visual merchandising displays and product knowledge</li>
        </ul>
      </div>
    </div>
  )
}

export default Resume
