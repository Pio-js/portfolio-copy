import { useState } from "react";

export default function Contact(props) {
    
    const title = props.data.Contact.title;
    const content = props.data.Contact.content;

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function emailHandler (e) {
        e.preventDefault();
        //todo
    }

    return (
        <div id="contact">
            <h2>{title}</h2>
            <p>{content}</p>
            <form onSubmit={emailHandler}>
                <input type='text' id='email-address' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <textarea id='message' value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
    )
}
