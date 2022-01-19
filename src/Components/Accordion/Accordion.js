import React from 'react';
import { useState, useRef, useEffect } from "react";
import './Accordion.css'
import Chevron from './chevron.svg'

export default function Accordion() {

  const [toggle, setToggle] = useState(false);
  const toggleState = () => {
    setToggle(!toggle);
  }

  const refHeight = useRef();
  const [heightEl, setHeightEl] = useState();

  useEffect(() => {

    setHeightEl(`${refHeight.current.scrollHeight}px`);

  }, []);


  return (
    <div className="accordion">
      <div
        onClick={toggleState}
        className="accordion-visible">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <img src={Chevron} alt="chevron down" />
      </div>

      <div
        ref={refHeight}
        className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
        style={{height: toggle ? `${heightEl}` : "0px"}}
        >
        <p aria-hidden={toggle ? "true" : "false"}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dignissimos, accusamus sint doloribus sunt corporis. Libero veniam mollitia, rem magnam tempora, nobis dicta eos fugiat esse aspernatur pariatur velit! Repellat!</p>
      </div>
    </div>
  )
}
