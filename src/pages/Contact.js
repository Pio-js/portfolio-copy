import { useRef } from "react";
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact(props) {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm(process.env.EMAIL_JS_SERVICE, process.env.EMAIL_JS_TEMPLATE, form.current, process.env.EMAIL_JS_USER)
        .then((result) => {
            console.log(result.text);
            alert('Your message was sent successfully!')
        }, (error) => {
            console.log(error.text);
            alert('Something went wrong and your message was not sent!');
        });
        e.target.reset();
    }
    
    const title = props.data.contact.title;
    const content = props.data.contact.content;

    return (
        <div id="contact">
            <h1>{title}</h1>
            <p style={{"whiteSpace": "pre-line"}}>{content}</p>
            <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="contact-name">Your name</label>
                <input type='text' id='contact-name' name="user_name" required/>
                <label htmlFor="contact-email-address">Your email address</label>
                <input type='text' id='contact-email-address' name="user_email" required/>
                <label htmlFor="contact-message">Your message</label>
                <textarea id='contact-message' name="message" required/>
                <div id="check-send">
                    <div className="g-recaptcha" data-sitekey="6LdK-MYhAAAAALiwrJXUw8OUQWYaA_qxF98-qj5J" required></div>
                    <button id='send-button' type="submit">Send</button>
                </div>
                
            </form>
            {/* <img id="contact-cowboy" src="../images/cowboy.png" alt="cowboy"/> */}
        </div>
    )
}
