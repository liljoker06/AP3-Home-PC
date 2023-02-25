// import '../styles/Inscription';
import React from 'react';
import ins  from '../images/inscription.png';

// j'importe le composant  qui contient le formualaire
import {F} from './ins_formulaire';


const Inscription = () => {
    return(
        <div className='container mt-3'> 
            <div className='row'>
                <div className='col-md-6 my-auto'>
                    <img className='img-fluid w-100' src={ins} alt=""/>
                </div>
                <div className='col-md-6'> 
                <F/>
                </div>
            </div>
        </div>
    )
}

export default Inscription;
