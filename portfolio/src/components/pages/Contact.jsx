import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Contact() {
  const sendToast = () => {
    toast("📧 Teeeeeeeeeeeeeeeesting!", { autoClose: 4000, theme: "dark" });
  };

  /************** Allow user to send a message via the contact form using email.js *******************/
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qpkgtem", "template_i9musmj", form.current, {
        publicKey: "rmJYwfht2pyj1dWmv",
      })
      .then(
        () => {
          toast(
            "📧 Sent! Thank you for sending me a message. I will get back to you very soon",
            { autoClose: 4000, theme: "dark" }
          );
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Error! Could not send message.", {
            autoClose: 4000,
            theme: "dark",
          });
        }
      );
  };
  /********************************************************************************************************/

  return (
    <main>
      <section id="contact">
        <h2>Contact me</h2>
        <div className="container">
          <div className="row mt-5">
            <form
              id="contact-form"
              className="mb-5 col-lg-8 col-xs-10 mx-auto"
              ref={form}
              onSubmit={sendEmail}
            >
              <h5 className="card-title mb-3">Send me a message:</h5>
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <label htmlFor="inputName">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    className="form-control"
                    id="inputName"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="col-xs-12 col-md-6">
                  <label htmlFor="inputEmail">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    id="inputEmail"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="inputMessage">Message</label>
                <textarea
                  type="text"
                  name="message"
                  className="form-control"
                  id="inputMessage"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                value="Send"
                className="btn btn-sm btn-primary mt-4"
              >
                Submit
              </button>
            </form>
            <button
              type="submit"
              value="Send"
              className="btn btn-sm btn-primary mt-4 w-50"
              onClick={sendToast}
            >
              Test Toast
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
