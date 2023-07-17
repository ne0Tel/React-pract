import React from 'react';
import Logo from '../сomponents/Commmon-Components/Logo';
import Navigation from '../сomponents/Commmon-Components/Navigation';

function Header() {
  return (
    <header className='_container _flex header'>
      <Logo/>
      <Navigation/>
    </header>
  );
}

export default Header;
