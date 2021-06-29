import React from 'react'
import Button from './Button'

import './WorkExContent.css'

const WorkExContent = props => (

  <div className={`WorkExContent`}>
    <div className="WorkExContentContainer">
      <div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <Button
          link={props.project}
          cname="exampleBtn"
          label="Check Out Project"
        />
      </div>
      <figure>
        <a href={props.project}><img src={props.imgSrc} alt={props.imgAlt}/></a>
        <figcaption>{props.title}</figcaption>
      </figure>
    </div>
  </div>

)

export default WorkExContent