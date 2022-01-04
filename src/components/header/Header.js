import React, {useState} from "react";
// import reactDom from "react-dom";
// import { NavLink } from "react-router-dom";

import './Header.css';
// import LoginPopup from "../loginPopup/LoginPopup";
// import SignupPopup from "../signupPopup/SignupPopup";

import { GiHamburgerMenu } from 'react-icons/gi';

import logo from "../../assets/logo.png";

const Header = () => {

    const [openModal, setOpenModal] = useState(false);
    const [openSignupModal, setOpenSignupModal] = useState(false);
    const [showMenu, setShowMenu] = useState(false);    


    return (
        <div className='header'>
            <div className={showMenu ? 'mobile-menu-options' : 'header-main'}  >
                <div className='header-main-left'>
                    <div className='header-main-left-courses'>Home
                        {/* <NavLink exact activeClassName='active-menu' className='menu-option-options' to='/VenusEdTech/courses'>Courses</NavLink> */}
                    </div>
                    <div className='header-main-left-search'>
                        <input type='search' placeholder='Search'></input>
                    </div>
                </div>
                <div className='header-main-logo'>
                    {/* <NavLink to='/VenusEdTech/home'> */}
                    <img src={logo} alt='logo' />
                    {/* </NavLink> */}
                </div>
                <div className='header-main-right'>
                    <div className='header-main-right-item'>
                        <p>
                        {/* <NavLink exact activeClassName='active-menu' className='menu-option-options' to='/VenusEdTech/about'> */}
                        About
                        {/* </NavLink> */}
                        </p>
                    </div>
                    <div className='header-main-right-item'>
                        <p>
                        {/* <NavLink exact activeClassName='active-menu' className='menu-option-options' to='/VenusEdTech/about'> */}
                        Services
                        {/* </NavLink> */}
                        </p>
                    </div>
                    <div className='header-main-right-item'>
                        <p>
                        {/* <NavLink exact activeClassName='active-menu' className='menu-option-options' to='/VenusEdTech/about'> */}
                        Industries
                        {/* </NavLink> */}
                        </p>
                    </div>
                    <div className='header-main-right-item'>
                        <p>
                        {/* <NavLink exact activeClassName='active-menu' className='menu-option-options' to='/VenusEdTech/about'> */}
                        Insights
                        {/* </NavLink> */}
                        </p>
                    </div>
                    <div className='header-main-right-item'>
                        <p>
                        {/* <NavLink exact activeClassName='active-menu' className='menu-option-options' to='/VenusEdTech/about'> */}
                        Career
                        {/* </NavLink> */}
                        </p>
                    </div>
                    
                    <div className='header-main-right-item'>
                        <button onClick={()=> {setOpenModal(true)}}>Login</button>
                    </div>
                    <div className='header-main-right-item'>
                        <button onClick={()=> {setOpenSignupModal(true)}}>SignUp</button>
                    </div>
                </div>
            </div>
            <div className='header-logo'>
                {/* <NavLink to='/VenusEdTech/home'> */}
                <img src={logo} alt='logo' />
                {/* </NavLink> */}
            </div>
            <div className='hamburger-menu'>
                <a href='#' onClick={() => setShowMenu(!showMenu)}>
                    <GiHamburgerMenu size={25}/>
                </a>
            </div>
            {/* {openModal && <LoginPopup closeModal={setOpenModal}/>}
            {openSignupModal && <SignupPopup closeModal={setOpenSignupModal}/>} */}
        </div>
    )
}

export default Header