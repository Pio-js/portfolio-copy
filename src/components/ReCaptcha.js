import { useEffect } from "react";

export default function ReCaptcha(props) {

    const recaptchaEl = <div className="g-recaptcha" data-sitekey="6LdK-MYhAAAAALiwrJXUw8OUQWYaA_qxF98-qj5J"></div>;

    useEffect(() => {
        loadScript();
        // eslint-disable-next-line
    }, [props.lang]);

    function checkRecaptchaLang() {
        setTimeout(() => {
            const iframe = document.querySelector('.g-recaptcha').getElementsByTagName('iframe')[0];
            console.log(iframe);
            if(iframe) {
                const language = iframe.src.match(/hl=(.*?)&/).pop();
                if (language !== props.lang) {
                    iframe.src = iframe.src.replace(/hl=(.*?)&/, 'hl=' + props.lang + '&');
                }
            }
        }, 200);
    }

    function createScriptEl() {
        const head = document.getElementsByTagName("head")[0];
        const script = document.createElement("script");
        script.id = 'recaptcha-check'
        script.src = `https://www.google.com/recaptcha/api.js?hl=${props.lang}`;
        script.async = true;
        script.defer = true;
        head.appendChild(script);
        checkRecaptchaLang();
    }

    function loadScript() {
        const iframe = document.querySelector('.g-recaptcha').getElementsByTagName('iframe')[0];
        console.log(iframe);
        if (iframe) {
            iframe.src = iframe.src.replace(/hl=(.*?)&/, 'hl=' + props.lang + '&');
        } else {
            const node = document.getElementById("recaptcha-check");
            if (node) {
                console.log('deleted');
                node.parentNode.removeChild(node);
                createScriptEl();
            } else {
                createScriptEl();
            }
        }
    }
    

    return recaptchaEl;
}
