import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import '../../styles/main-section/ButtonToTop.scss';

export default function ButtonToTop() {
  const [buttonState, setButtonState] = useState('hidden');

  let myScrollFunc = function () {
    let y = window.scrollY;
    if (y >= 90) {
      setButtonState('shown');
    } else {
      setButtonState('hidden');
    }
  };

  window.addEventListener('scroll', myScrollFunc);

  return (
    <div
      className={`button-to-top ${buttonState}`}
      onClick={() => scroll.scrollToTop()}
    >
      <i className="far fa-hand-point-up"></i>
    </div>
  );
}
