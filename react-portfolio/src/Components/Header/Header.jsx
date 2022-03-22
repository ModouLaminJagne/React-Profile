import React from 'react';
import './Header.css';
import CTA from './CTA';
import me1 from '../../Assets/me1.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div id='home' className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Modou Jallow</h1>
        {/* <h1>Jagne</h1> */}
        <h5 className="text-light">React Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={me1} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
