import { useState } from "react";
import Question from './question';
import Setup_form from "./setup_quiz";

export default function Quiz(props){
    
    const [correct,setCorrect] = useState(0);
    const [total,setTotal] = useState(0);
    let [currentQ,setCurrentQ] = useState(0);
    console.log('@@@@',currentQ)

    let nextQuestion = (arg1=currentQ)=>{
        let numQuests = props.questions.length
        setTotal(total+1)
        // console.log("nextQuestion function called.",numQuests,total)
        if(currentQ<numQuests-1){
            setCurrentQ((value)=>{
                return value+1
            });
        }
        console.log('****',currentQ,arg1)
        // let question = <Question questionInfo={props.questions[currentQ]} currentQ={[currentQ,setCurrentQ]} showNext={nextQuestion}/>
        // setComponent(question)
        return currentQ;
    }
    let setupDone = function(){//()=>{
        //this represents child, but the variables of this function can be accessed too.
        
        console.log("setupDone function called.",this,currentQ)
        nextQuestion()
    }
    const setup_form =  <Setup_form cat_values={props.cats} setupDone={setupDone}/>
    const [component,setComponent] = useState(setup_form)

    function doit(){
        // setTotal(total+1)
        nextQuestion()
        // console.log('doing it',currentQ,total)
    }


    return <>
        <div onClick={()=>{doit()}}>{currentQ}
        {total}
        </div>
        {component}
    </>;
}