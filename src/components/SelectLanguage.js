import { useState, useEffect } from "react";
import './SelectLanguage.css';

export default function SelectLanguage(props) {

    const languages = ['it', 'de', 'en'];
    const otherLanguages = languages.filter(lang => lang !== props.lang);

    const [selectLangBtn, setSelectLangBtn] = useState();
    const [button, setButton] = useState(false);

    const chooseLang = otherLanguages.map(lang => {
        const bgImg = `url(images/${lang}.png)`;
        return(
            <div
            key={lang}
            className={props.orientation === 'landscape' ? "lang-to-select fade-in" : "lang-to-select"}
            style={{"backgroundImage": bgImg}}
            onClick={() => {
                props.setLang(lang);
                props.orientation === 'landscape' ?
                setButton(!button)
                :
                props.setOpen(!props.open)
            }}>
            </div>
            );
    });

    useEffect(() => {
        props.lang && setSelectLangBtn(chooseLang);
        // eslint-disable-next-line
    }, [props.lang]);

    const menuLandscape = (
        <div className="lang-selection">
            <div className="lang-popup">
                {button && selectLangBtn}
            </div>
            <div className="lang-selected" id={props.lang} style={{"backgroundImage": `url(images/${props.lang}.png)`}} onClick={() => setButton(!button)}></div>
        </div>
    );

    const menuPortrait = (
        <div className="lang-selection-portrait">
            <div className="lang-buttons-portrait">
                {chooseLang}
            </div>
        </div>
    );

    const langMenu = 
        props.orientation === 'landscape' ?
        menuLandscape
        :
        menuPortrait;

    return langMenu;
}
