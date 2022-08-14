import { useState, useEffect } from "react";
import './SelectLanguage.css';

export default function SelectLanguage(props) {

    console.log(props.lang);
    const languages = ['it', 'de', 'en'];
    const otherLanguages = languages.filter(lang => lang !== props.lang);
    const chooseLang = otherLanguages.map(lang => {
        const bgImg = `url(images/${lang}.png)`;
        return( 
            <div className="lang-to-select" key={lang} style={{"backgroundImage": bgImg}} onClick={() => {props.setLang(lang); setButton(!button)}}></div>
            );
    });

    const [selectLangBtn, setSelectLangBtn] = useState();
    const [button, setButton] = useState(false);

    useEffect(() => {
        props.lang && setSelectLangBtn(chooseLang);
        // eslint-disable-next-line
    }, [props.lang]);

    const menuLandscape = (
        <div className="lang-selection">
            <div className="lang-popup">
                {button && selectLangBtn}
            </div>
            {/* <div className="lang-sel-txt">Choose your language: </div> */}
            <div className="lang-selected" id={props.lang} style={{"backgroundImage": `url(images/${props.lang}.png)`}} onClick={() => setButton(!button)}></div>
        </div>
    );

    const menuPortrait = 'TODO';

    const langMenu = 
        props.orientation === 'landscape' ?
        menuLandscape
        :
        menuPortrait;

    return langMenu;
}
