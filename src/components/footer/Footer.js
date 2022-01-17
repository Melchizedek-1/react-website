import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaFax, FaEnvelope, FaGlobe } from 'react-icons/fa';
import logo from "../../assets/logo.png";

const Footer = () => {
    return (
        <footer id='footer'>
            <div className='container footer'>
                <div className='footer-box'>
                    <h4>Useful Links</h4>
                    <div className='footer-links'>
                        <a href='#'>&bull; Support</a>
                        <a href='#'>&bull; About</a>
                        <a href='#'>&bull; Learn</a>
                        <a href='#'>&bull; Hosting</a>
                        <a href='#'>&bull; Messenger</a>
                    </div>
                </div>
                <div className='footer=box'>
                <h4>Support</h4>
                    <div className='footer-links'>
                        <a href='#'>&bull; Support</a>
                        <a href='#'>&bull; About</a>
                        <a href='#'>&bull; Learn</a>
                        <a href='#'>&bull; Hosting</a>
                        <a href='#'>&bull; Messenger</a>
                    </div>
                </div>
                <div className='footer=box'>
                    <h4>Contact Us</h4>
                    <div className='footer-contact'>
                        <p>
                            <FaMapMarkerAlt /> &nbsp; Address: United States.
                        </p>
                        <p>
                            <FaPhoneAlt /> &nbsp; Phone: +566 88989 8.
                        </p>
                        <p>
                            <FaFax /> &nbsp; Fax: +7678798798.
                        </p>
                        <p>
                            <FaEnvelope /> &nbsp; Email: indo@wesos.com.
                        </p>
                        <p>
                            <FaGlobe /> &nbsp; Website: www.socialx.com.
                        </p>
                    </div>
                </div>
                <div className='footer=box'>
                    <img src={logo} alt='logo' />
                    <p className='u-small-text'>
                        &copy; Copyright 2022. Wesonga
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
