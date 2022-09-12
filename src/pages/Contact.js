import { useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import ReCaptcha from "../components/ReCaptcha";
import './Contact.css';

export default function Contact(props) {

    const form = useRef();
    const titleRef = useRef();

    useEffect(() => {
        titleRef.current.scrollIntoView({behavior: "smooth", block: "start"});
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_8298tmn', 'template_qx8lnck', form.current, 'MtRz-U23T60Guqdmp')
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
    const name = props.data.contact.form.name;
    const email = props.data.contact.form.email;
    const message = props.data.contact.form.message;
    const sendButton = props.data.contact.form.button;

    return (
        <div ref={titleRef} id="contact">
            <h1>{title}</h1>
            <p style={{"whiteSpace": "pre-line"}}>{content}</p>
            <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="contact-name">{name}</label>
                <input type='text' id='contact-name' name="user_name" required/>
                <label htmlFor="contact-email-address">{email}</label>
                <input type='text' id='contact-email-address' name="user_email" required/>
                <label htmlFor="contact-message">{message}</label>
                <textarea id='contact-message' name="message" required/>
                <div id="check-send">
                    <ReCaptcha lang={props.lang} />
                    <button id='send-button' type="submit">{sendButton}</button>
                </div>
            </form>
        </div>
    )
}
