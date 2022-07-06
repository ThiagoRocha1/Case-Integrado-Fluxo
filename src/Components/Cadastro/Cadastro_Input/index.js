import React from 'react'

function Cadastro_Input(props) {
  return (
    <div className='Cadastro_Input_Container'>
        <input placeholder={props.placeholder} type={props.type} />
    </div>
  )
}

export default Cadastro_Input