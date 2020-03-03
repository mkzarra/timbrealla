import React from 'react';
import Logo from './assets/img/timbreallaLogo.png';

import './Header.css';

export default function Header(props) {
  return (
    <div>
      <header>
        <div>
          <span>
            <div onClick={props.backToLanding}>
              <img src={Logo} alt="timbrealla logo"/>
            </div>
          </span>
        </div>
      </header>
    </div>
  );
}
