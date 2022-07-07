import React from 'react';
import cliente from '../../Assets/cliente.png';
import admin from '../../Assets/admin.png';
import Login from '../../Assets/Login.png'
import "./styles.css";
import {Link} from 'react-router-dom';

export default function AreaOrganizacao() {
  return (
    <div className='Area_organizacao'>


        <Link to ='/'>
            <div className='DivOrganizacao'>
                <img src={Login} alt={'Login'} className='LogoArea'/>
                <div>Login</div>
            </div>
        </Link>

        <Link to ='/Cliente'>
            <div className='DivOrganizacao'>
                <img src={cliente} alt={'cliente'} className='LogoArea'/>
                <div>Cliente</div>
            </div>
        </Link>

        <Link to ='/Admin'>
            <div className='DivOrganizacao'>
                <img src={admin} alt={'Admin'} className='LogoArea'/>
                <div>Admin</div>
            </div>
        </Link>
        
      
    
  </div>
)
            
}
