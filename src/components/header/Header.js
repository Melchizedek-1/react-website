import React from 'react';
import "./Header.css";
import  phoneHeader from "../../assets/phone-header-bg.png"
import Button from '../UI/button/Button';
import "../UI/button/Button.css";

const Header = () => {
    return (
        <section id='header'>
            <div className='container header'>
                <div className='header-left'>
                    <h1>
                        <span>THE WORLD'S LEADING</span>
                        <span>CROSS-PLATFORM SECURE</span>
                        <span>MESSAGING SYSTEM</span>
                    </h1>
                    <p className="u-text-small u-text-light">SocialX is a loren ipsum dolor sit amet, consectetur adipsicing elit. Obcaecati ea aliqam sit nemo nisi! Nesciunt quis illum id qui et!</p>
                    <div className="header-cta">
                        <Button text={"Get Started"} btnClass={"btn-dark"} href={"#"} />
                        <Button text={"How it works"} btnClass={"btn-orange"} href={"#faq"} />
                    </div>
                </div>
                
                <div className='header-right'>
                    <img src={phoneHeader} alt="phone" />
                </div>
            </div>
        </section>
    )
}

export default Header
