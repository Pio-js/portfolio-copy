import './Horse.css';

export default function Horse(props) {
    
    return (
        <div id='horse'>
            <div id='rider-de'>
                <p>{props.countries[0]}</p>
                <img src='../images/brandeburgertor.png' alt='Brandeburger Tor'/>
            </div>
            <div id='horse-animation'>
                <marquee behavior='scroll' direction='left' scrollamount='10'>
                    <img id='rider' src='../images/rider.gif' alt='rider'/>
                </marquee>
            </div>
            <div id='rider-it'>
                <p>{props.countries[1]}</p>
                <img src='../images/colosseum.png' alt='Colosseum'/>
            </div>
        </div>
    )
}
