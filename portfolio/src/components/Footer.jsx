
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

// className="position-absolute mt-5 bottom-0 w-100"
function Footer() {
    return (
        <footer >
            <div>
                <a href="https://www.linkedin.com/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href="https://github.com/E-Davies/" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
            </div> 
        </footer>
    );
};

export default Footer;