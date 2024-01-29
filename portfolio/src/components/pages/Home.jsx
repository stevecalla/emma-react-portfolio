/*
Home:
    This should be a welcome landing page that contains:
        - Your Name
        - A Headshot of you
        - Your brand statement
        - Some indication that this is your portfolio site
*/

/*
Should I do components for: 
    - work projects? (guess these should be in projects page and load components ar projectGallery)
    
*/

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'

// Import component
import Skills from '../Skills';

// Import images
import profileImg from '../../../../assets/images/profile-img.jpg';
import jumboImg from '../../../../assets/images/banner.jpg'; 


function Home() {

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <div>
            <div className="mb-4 bg-body-tertiary jumbo" style={{backgroundImage: `url(${jumboImg})`}}>
                <div className="container-fluid py-5">
                    <div className="row col-11 p-3">
                        <div className="profile-img col-lg-5 col-xl-4">
                            <img src={profileImg} className=".img-fluid" alt="profile image"/>
                        </div>
                        <div className="profile-detail col-sm col-lg-7 col-xl-8">
                            <h1 className="display-5 fw-bold">Hi! 👋 I'm Emma </h1>
                            <h2 className="fw-bold">Welcome to my portfolio</h2>
                            <p className="fs-4">I hope you enjoy looking around and getting to know me. Be sure to check out my projects for a bit of fun 🎮 and get in touch if you'd like to know more</p>
                            <NavLink 
                                to="contact" 
                                className='btn btn-primary btn-md col-6'
                            >
                                Contact details 
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <section id="skills">
                <h2>Skills</h2>
                <div className="container-fluid text-center">
                    <div className="row g-3 mb-4" id="skills-div">
                        <Skills skill='HTML'/>
                        <Skills skill='CSS'/>
                        <Skills skill='Bootstrap'/>
                        <Skills skill='JavaScript'/>
                        <Skills skill='Node.js'/>
                        <Skills skill='React'/>
                        <Skills skill='Git'/>
                        <Skills skill='Github'/>
                    </div>
                </div>
            </section>

            <section id="cv">
                <h2>CV</h2>
                <div className="container-fluid text-center pb-5">
                    <p>You can see me full career history by downloading my CV:</p>
                    <button className="btn btn-primary btn-md" >Click here to see my CV</button>
                </div>

                <FontAwesomeIcon onClick={scrollToTop} icon={faAnglesUp} /> 

                
                   
            </section>

        </div>
    );
};
  
  export default Home;