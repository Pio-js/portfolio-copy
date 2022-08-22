export default function Tech(props) {

    const title = props.data.Tech.title;
    const content = props.data.Tech.content;
    return (
        <div id='tech'>
            {
                props.orientation === 'portrait' &&
                <img className='portrait-about-img' src='../images/Pio.png' alt='Pio Saija' />
            }
            <h2>{title}</h2>
            <p style={{"whiteSpace": "pre-line"}}>{content}</p>
        </div>
    )
}
