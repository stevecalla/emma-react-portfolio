/*
Contact:
    - Must have contact information
    - Have a contact form for handling events
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Contact() {
    return (
        <section id="contact">
            <h2>Contact me</h2>
            <div className="container">
                <div className="row">
                    <div className="mb-5 mt-5 col-3 mx-auto" >
                        <div className="card-body  p-3" id="contact-details">
                            <p className="card-text"><strong>Email: </strong><span className="font-color">example@email.com</span></p>
                            <p className="card-text"><strong>Number: </strong><small className="font-color">(+44) 07000 000 000</small></p>
                            <div>
                                <a href="https://www.linkedin.com/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                <a href="https://github.com/E-Davies/" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                                <a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <form className="mb-5 col-8 mx-auto">
                        <h5 className="card-title mb-3">Send me a message:</h5>
                        <div className="row">
                            <div className="col">
                                <label for="exampleInputPassword1">Name</label>
                                <input type="text" className="form-control" placeholder="Name"/>
                            </div>
                            <div className="col">
                                <label for="exampleInputPassword1">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <label for="exampleInputPassword1">Message</label>
                            <textarea type="password" className="form-control" id="exampleInputPassword1" placeholder="Message" ></textarea>
                        </div>
                        <button type="submit" className="btn btn-sm btn-primary mt-4">Submit</button>
                    </form>
                </div>

            </div>

        </section>
    );
};
  
  export default Contact;

  /*
            <div className="row">
                <div className="card mb-5 col-6 mx-auto">
                        <div className="card-body p-4">

                        </div>
                </div>


                <div className="card mb-5 col-6 mx-auto">
                    <div className="card-body p-4">
                        <form clasName="">
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Name</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Email address</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        <small id="emailHelp" className="form-text text-sm text-mute">We'll never share your email with anyone else.</small>
                                    </div>
                                </div>
                            </div>
                            <div class="row">

                                <div className="form-group mt-3">
                                    <label for="exampleInputPassword1">Message</label>
                                    <textarea type="password" className="form-control" id="exampleInputPassword1" placeholder="Message" ></textarea>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-sm btn-primary mt-4">Submit</button>
                        </form>
                    </div>
                </div>
            </div>


  */