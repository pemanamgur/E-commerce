import React from "react";
import './Footer.css';
import footer_logo from "../Assets/footer-logo.png"
import insta from '../Assets/instagram_icon.png';
import pinterest from '../Assets/pintester_icon.png';
import whatsapp from '../Assets/whatsapp_icon.png';
export default function Footer(){
    return(
        <div className='footer'>
            <div className='footer-logo'>
                <img src={footer_logo} alt='footer-logo' />
                <p>P-Shopper</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='footer-social-icons'>
                <div className='footer-icons-container'>
                    <img src={insta}/>
                </div>
                <div className='footer-icons-container'>
                    <img src={pinterest}/>
                </div>
                <div className='footer-icons-container'>
                    <img src={whatsapp}/>
                </div>
            </div>
            <div className='footer-copyRight'>
                <hr/>
                <p>CopyRight @ 2023 || All right reserved</p>
            </div>
        </div>
    )
}