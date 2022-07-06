import React from 'react';
import AreaOrganizacaoDiv from '../AreaOrganizacaoDiv';
import Cadastro from '../Cadastro';
import './styles.css';
import cliente from '../../Assets/cliente.png';
import admin from '../../Assets/admin.png';


export default function Main() {
  return (
    <div className='Main'>

        <div className='Area_organizacao'>

            <AreaOrganizacaoDiv title='Cliente' image={cliente}/>
            <AreaOrganizacaoDiv title='Admin' image={admin}/>

        </div>

        <Cadastro/>


    </div>

  )
};
