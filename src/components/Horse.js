import './Horse.css';

export default function Horse(props) {
    
    return (
        <div id='horse'>
            <div id='rider-de'>
                <p>{props.countries[0]}</p>
                <img src='../images/brandeburgertor.png' alt='Brandeburger Tor'/>
            </div>
            <div id='horse-animation'>
                    <img id='rider' src='../images/rider.gif' alt='rider'/>
            </div>
            <div id='rider-it'>
                <p>{props.countries[1]}</p>
                <img src='../images/colosseum.png' alt='Colosseum'/>
            </div>
        </div>
    )
}
