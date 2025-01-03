import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import style from "../Modules/Contact.module.css";
function Contact() {
  return (
    <>
      <div className={style.contact}>
        <h1>
          Let's Get in Touch: Ways to <br /> Connect with Me
        </h1>
        <p>
          Thank you for your interest in getting in touch with me. I welcome
          your feedback, questions, and suggestions. If you have a specific
          question or comment, please feel free to email me directly at{" "}
          <a href="mailto:parmartulsi222@gmail.com.">
            parmartulsi222@gmail.com.
          </a>
          I make an effort to respond to all messages within 24 hours, although
          it may take me longer during busy periods. Alternatively, you can use
          the contact form on my website to get in touch. Simply fill out the
          required fields and I'll get back to you as soon as possible. Finally,
          if you prefer to connect on social media, you can find me on{" "}
          <a
            href="https://www.linkedin.com/in/tulsi-parmar-76a865290/"
            target="_blank"
          >
            Linkedin
          </a>
          . I post regular updates and engage with my followers there, so don't
          hesitate to reach out. Thanks again for your interest, and I look
          forward to hearing from you!
        </p>
        <div className={style.follow}>
          <a href="https://github.com/tulsi-parmar1" target="_blank">
            <FaGithub /> Follow on GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tulsi-parmar-76a865290/"
            target="_blank"
          >
            <FaLinkedin /> Follow on LinkedIn
          </a>
          <a href="mailto:parmartulsi222@gmail.com">
            {" "}
            <MdOutlineEmail />
            <span> </span>
            parmartulsi222@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
