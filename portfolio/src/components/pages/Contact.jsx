
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Contact() {
    
    // const axios = require('axios/dist/node/axios.cjs');

    // axios.defaults.headers.post['Content-Type'] = 'application/json';
    // axios.post('https://formsubmit.co/ajax/emma002@btclick.com', {
    //     name: "FormSubmit",
    //     message: "I'm from Devro LABS"
    // })
    //     .then(response => console.log(response))
    //     .catch(error => console.log(error));

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://formsubmit.co/ajax/emma002@btclick.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(new FormData(event.target))),
        })
    }

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
                        <form className="mb-5 col-lg-8 col-xs-10 mx-auto" onSubmit={handleSubmit} method="POST">
                        
                        {/* after submitting a form the user is shown the contact page */}
                        {/* <input type="hidden" name="_next" value="https://e-davies.github.io/react-portfolio/?#/contact"/> */}
                        
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