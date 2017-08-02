import React from 'react'
import '../styles/Projects.css'

function Projects() {
  return (
    <div className="projects-main">
      <div className="projects-inner">
        <h3>PROJECTS</h3>
        <h2>Meal Buddy</h2>
        <p>An app that allows users to add recipes to a meal planner and creates shopping lists</p>
        <ul>
          <li>Applied CRUD features with React’s virtual-DOM to render and update fetched data from custom built API endpoints</li>
          <li>Built custom Rails APIs to handle fetch requests for a fast single page application experience with no refreshes</li>
          <li>Used Vanilla CSS to design a responsive front end</li>
          <li>Utilized JWT to create access tokens</li>
        </ul>

        <h2>Piano Roll</h2>
        <p>A musical interface that displays audio notes and can play midi tracks</p>
        <ul>
          <li>Built a React based web platform</li>
          <li>Parsed MIDI files into JSON format</li>
          <li>Created a custom RESTful API with Ruby on Rails</li>
        </ul>

        <h2>Food Journal</h2>
        <p>An app that allows users to log meals and track calorie intake</p>
        <ul>
          <li>Used jQuery to handle events triggered by users to load data from the server without a browser page refresh</li>
          <li>Implemented AJAX requests to make GET and POST requests with the RESTful API that was built with Rails</li>
          <li>Used PostgreSQL as the database</li>
          <li>Utilized ActiveModel::Serializer to create custom JSON responses</li>
        </ul>
      </div>
    </div>
  )
}

export default Projects
