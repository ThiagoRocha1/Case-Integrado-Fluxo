import React from 'react'
import './styles.css'

export default function HeaderDiv(props) {
  return (
    <div className='HeaderDiv'>
      <img src={props.image} alt={props.title} className='LogoHeader'/>
      <div>{props.title}</div>
    </div>
  )
}
