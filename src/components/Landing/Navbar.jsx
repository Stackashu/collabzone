import React, { useState } from "react";
import style from "../../styles/Landing/Navbar.module.css";
import logo from "../../assests/images/CollabLogo.png";
import { NavLink } from "react-router-dom";
import "../../App.css";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import GamepadOutlinedIcon from '@mui/icons-material/GamepadOutlined';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const navs = ["Home", "Features", "How It Works", "Testimonials", "FAQs"];

  return (
    <>
      <header className={`${style.header}`}>
        <div className={`${style.lefthead}`}>
          <img className={`${style.logo}`} src={logo} alt="CollabZone logo" />
          <h1>
            <span>C</span>ollab<span>Z</span>one
          </h1>
        </div>

        <nav>
          <ul className={`${style.navbar} `}>
            {navs.map((nav, index) => (
              <li
                key={index}
                className={`${style.navbar} ${
                  activeIndex === index ? "changecolor" : ""}`}
                onClick={() => setActiveIndex(index)}  >
                {nav}
              </li>
            ))}
          </ul>
        </nav>

        <div className={`${style.righthead}`}>
          <NavLink className={`${style.link1}`} to="#">
            Get Started for FREE
          </NavLink>
          <NavLink className={`${style.link2}`} to="#">
            Log in
          </NavLink>
        </div>
      </header>

      {/* mobile and tablet view code  */}

      <header className={`${style.header2}`}>
      
        <div className={`${style.lefthead2}`}>
        <img className={`${style.logo2}`} src={logo} alt="CollabZone logo" />
          <h1>
            <span>C</span>ollab<span>Z</span>one
          </h1>
        </div>
        
       <div  onClick={() => setIsOpen(true)}>
        <GamepadOutlinedIcon  className={`${style.button}`} /> 
      </div>
          
          {/* navbar pallete  for up and down*/}
          <nav className={`${style.mainnav} ${isOpen ? style.mainnavup : " "} `}>
            <ul className={`${style.navbar2}`}>
              <li><HomeOutlinedIcon style={{ fontSize: 50 }}/> <h4>Home</h4></li>
              <li><FeaturedPlayListOutlinedIcon style={{ fontSize: 50 }}/><h4>Features</h4></li>
              <li><QuestionMarkOutlinedIcon style={{ fontSize: 50 }}/><h4>How It Works</h4></li>
              <li><DocumentScannerOutlinedIcon  style={{ fontSize: 50 }}/><h4>Testimonials</h4></li>
              <li><LiveHelpOutlinedIcon style={{ fontSize: 50 }}/><h4>FAQs</h4></li>
            </ul>
            <div className={`${style.linkbox}`}>
               <NavLink className={`${style.link1}`} to="#">
                 Get Started for FREE
               </NavLink>
              <NavLink className={`${style.link2}`} to="#">
                 Log in
               </NavLink>
        </div>
             <CloseOutlinedIcon className={`${style.cross}`} onClick={() => setIsOpen(false)} />
          
          </nav>
      </header>

    </>
  );
};

export default Navbar;
