import React from 'react';
import './homepage.styles.scss';
import {Directory} from '../../components/directory/directory.components'
const HomePage = () => (
  <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
     <Directory/>
  </div>
);

export  {HomePage}