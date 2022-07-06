import React from 'react';
import './styles.css'

export default function Cadastro() {
  return (
    <div className='Cadastro'>
        
        <h1>Marque sua consulta aqui!</h1>

        <input type={'text'} placeholder={'Nome'} className='input_cadastro'/>
        <input type={'email'} placeholder={'Email'} className='input_cadastro'/>
        <input type={'number'} placeholder={'Telefone'} className='input_cadastro'/>
        <input type={'date'} placeholder={'Data'} className='input_cadastro'/>


        <button className='button_cadastro'>Submeter</button>

        

    </div>
  )
}
