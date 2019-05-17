import React from 'react'

const Teacher = props => (
  <li className="Teacher">
    {props.name} <a href={`https://twitter.com/${props.twitter}`}>props.twitter</a>
  </li>
)

export default Teacher
