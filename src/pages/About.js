import './About.css';

export default function About(props) {

    const title = props.data.About.title
    const content = props.data.About.content;
    return (
        <div id='about'>
            {
                props.orientation === 'portrait' &&
                <img className='portrait-about-img' src='../images/Pio.png' alt='Pio Saija' />
            }
            <h2>{title}</h2>
            <p style={{"whiteSpace": "pre-line"}}>{content}</p>
        </div>
    )
}
