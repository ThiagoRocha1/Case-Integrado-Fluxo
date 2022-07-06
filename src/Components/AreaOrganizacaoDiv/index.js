import React from 'react'
import './styles.css'

export default function AreaOrganizacaoDiv(props) {
  return (
    <div className='DivOrganizacao'>
      <img src={props.image} alt={props.title} className='LogoArea'/>
      <div>{props.title}</div>
    </div>
  )
}
