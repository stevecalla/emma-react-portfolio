
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Contact() {
    return (
        <main>
            <section id="contact">
                <h2>Contact me</h2>
                <div className="container">
                    <div className="row">
                        <div className="mb-5 mt-5 col-auto mx-auto" >
                            <div className="card-body  p-3" id="contact-details">
                                <p className="card-text"><strong>Email: </strong><a className="font-color" href="mailto:example@email.com">example@email.com</a></p>
                                <p className="card-text"><strong>Number: </strong><a className="font-color" href="tel:+447000000000">(+44) 07000 000 000</a></p>
                                <div>
                                    <a href="https://www.linkedin.com/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                    <a href="https://github.com/E-Davies/" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <form className="mb-5 col-lg-8 col-xs-10 mx-auto" action="https://formsubmit.co/193d2d7cfce46e1be8fcaab52f8ba719" method="POST">
                        
                        {/* after submitting a form the user is shown the contact page */}
                        <input type="hidden" name="_next" value="https://e-davies.github.io/react-portfolio/?#/contact"/>
                        
                        {/* Disable reCAPTCHA  */}
                        <input type="hidden" name="_captcha" value="false"></input>
                            
                            <h5 className="card-title mb-3">Send me a message:</h5>
                            <div className="row">
                                <div className="col-xs-12 col-md-6">
                                    <label>Name</label>
                                    <input type="text" name="Name" className="form-control" id="inputName" placeholder="Name" required />
                                </div>
                                <div className="col-xs-12 col-md-6">
                                    <label>Email</label>
                                    <input type="email" name='Email' className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <label>Message</label>
                                <textarea type="text" name='Message' className="form-control" id="inputMessage" placeholder="Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-sm btn-primary mt-4">Submit</button>
                        </form>
                    </div>

                </div>

            </section>
        </main>
    );
};

export default Contact;