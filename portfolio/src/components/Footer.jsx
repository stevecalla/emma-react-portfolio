/*
Need to understand how to import and use fontawesome icons to replace <i>'s below
*/


import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer>
            <div>
                {/* <a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in" alt="linkedin logo"></i></a>
                <a href="https://github.com/E-Davies/" target="_blank"><i className="fa-brands fa-github" alt="github logo"></i></a>
                <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram" alt="instagram logo"></i></a> */}
                <a href="https://www.linkedin.com/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href="https://github.com/E-Davies/" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
            </div> 
        </footer>
    );
};

export default Footer;