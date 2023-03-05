import './styles/card.css'

export default function Card(props){
    return<div className='cardCont'>
        <div className='card'>
            <h1 style={{marginBottom:-0.8+'cm'}}>Congrats!</h1>
            <span className='card-text'>You answered correctly {props.correct}/{props.total} times.</span>
            <button type='submit' className='submit-button' onClick={props.startNewQuiz}>Play Again</button>
        </div>
    </div>
}