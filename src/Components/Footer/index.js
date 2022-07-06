import React from 'react';
import './styles.css'
import instagram from '../../Assets/instagram.png'
import telefone from '../../Assets/telefone.png'

export default function Footer() {
  return (
    <div className='Footer'>

        <div className='Instagram_footer'>
            <img src={instagram} alt='instagram' className='Logo'/>
        </div>

        <div className='Info_Footer'>
            Marcela é uma nutricionista que trabalha há mais de 20 anos no mercado. Seu escritório está localizado na região
            de Olaria.
        </div>

        <div className='Telefone_Footer'>
          <img src={telefone} alt='telefone' className='Logo'/>
        </div>

    </div>
  )
};
