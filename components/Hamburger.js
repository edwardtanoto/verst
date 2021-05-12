import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from 'next/link'
import { server } from '../config'


import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose
} from "./Animations";

const cities = [
  { name: "Indonesia", image: `${server}/images/jakarta.jpeg` },
  { name: "China", image: `${server}/images/shanghai.webp` },
  { name: "United States", image: `${server}/images/newyork.jpeg` },
];

const Hamburger = ({ state }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      staggerText(line1.current, line2.current, line3.current);
      fadeInUp(info);
    }
  }, [state]);

  return (
    <div ref={el => (menuLayer = el)} className='hamburger-menu'>
      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'></div>
      <div ref={el => (reveal2 = el)} className='menu-layer'>
        <div
          ref={el => (cityBackground = el)}
          className='menu-city-background'></div>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li>
                    <Link href={'/labs'}>
                      <a onMouseEnter={e => handleHover(e)}
                        onMouseOut={e => handleHoverExit(e)} ref={line1}>
                        Labs
                    </a>
                    </Link>
                  </li>
                  <li>
                    <a href={'/opportunities'} onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)} ref={line2}>
                      Expertise
                    </a>
                  </li>
                  <li>
                    <a href={'/opportunities'} onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)} ref={line3}>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>
              <div ref={el => (info = el)} className='info'>
                <h3>Our Value</h3>
                <p>
                  As technology has shaped the culture of our society, we dedicate ourselves to start innovating the future of our culture. We bring high-quality values through strategised design and strong technology.
                </p>
              </div>
              <div className='locations'>
                Locations:
                {/* Returning the list of cities */}
                {cities.map(el => (
                  <span
                    key={el.name}
                    onMouseEnter={() => handleCity(el.image, cityBackground)}
                    onMouseOut={() => handleCityReturn(cityBackground)}>
                    {el.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Hamburger;
