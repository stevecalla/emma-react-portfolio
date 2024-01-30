
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
                                <p className="card-text"><strong>Number: </strong><a className="font-color"href="tel:+447000000000">(+44) 07000 000 000</a></p>
                                <div>
                                    <a href="https://www.linkedin.com/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                    <a href="https://github.com/E-Davies/" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <form className="mb-5 col-lg-8 col-xs-10 mx-auto">
                            <h5 className="card-title mb-3">Send me a message:</h5>
                            <div className="row">
                                <div className="col-xs-12 col-md-6">
                                    <label>Name</label>
                                    <input type="text" className="form-control" placeholder="Name"/>
                                </div>
                                <div className="col-xs-12 col-md-6">
                                    <label>Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <label>Message</label>
                                <textarea type="password" className="form-control" id="exampleInputPassword1" placeholder="Message" ></textarea>
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