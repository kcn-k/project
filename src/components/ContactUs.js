import { Card } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

const ContactUs = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q1vle8s",
        "template_0q1uen4",
        e.target,
        "user_D6trSuXC3HqCX9ckPJGvp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section>
      <div className="contactContainer">
        <h2 className="contactUsTitle">Contact Us</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <form onSubmit={sendEmail}>
          <div>
            <label>Enter Email</label>
            <input type="text" name="email" />
          </div>
          <div>
            <label>Enter Subject</label>
            <input type="text" name="subject" />
          </div>
          <div>
            <label>Enter Message</label>
            <input classname="eMessage" type="text" name="message" />
          </div>
          <div>
            <button className="submitbtn" type="submit" value="send">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default ContactUs;
