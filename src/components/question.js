import { useEffect, useState } from "react"

import './styles/question.css'

export default function Question(props){

    // const selections = props.selections;
    const multiAns = props.questionInfo.correct.length>1;

    useEffect(()=>{
        // console.log('Rendering',props.questionInfo.question,props.selections)
        return ()=>{
            // console.log('unmount',props.questionInfo.question)
        }
    })

    let clickHandler = (event)=>{
        let sel_ind = parseInt(event.target.getAttribute('ans_ind'));
        let selections2=props.selections.slice()

        if (selections2.includes(sel_ind)){
            let item_ind = selections2.indexOf(sel_ind)
            selections2.splice(item_ind,1);
        }
        else if (multiAns){
            selections2.push(sel_ind)
        }
        else{
            selections2=[sel_ind]
        }
        props.handleAnswerSelections(selections2)
    }

    let question = <div className='question'>{props.questionInfo.question}</div>
    let options = props.questionInfo.answers.map((value,i)=>{
        let sel_class=''
        if (props.selections.includes(i)) {
            sel_class='selected'
        }
        return <div className={'answer '+sel_class} key={i} ans_ind={i} id={props.questionInfo.id+'-'+'ans'+'-'+i} onClick={clickHandler}>{value}</div>
    })
    let answers = <div className='answersCont'>{options}</div>

    return <>
        <form className='questionForm' onSubmit={(event)=>{
            event.preventDefault();
            props.showNext();
            
        }}>        
            {question}
            {answers}
        
        {/* <br/> */}
        <button type='submit' className='submit-button' >{props.isLast?'Submit':'Next'}</button>
        </form>
    </>

}