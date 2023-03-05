import { useEffect, useRef, useState } from "react";
import Question from './question';
import Setup_form from "./setup_quiz";
import QuizNav from './quizNav';
import Card from './card'

import './styles/quiz.css'

export default function Quiz(props){
    
    const [totQuests,setTotQuests] = useState(-1);

    const [correct,setCorrect] = useState(0);
    const [total,setTotal] = useState(0);

    const [currentQ,setCurrentQ] = useState(-1);
    const [currentQId,setCurrentQId] = useState(-1);
    const [questions,setQuestions] = useState({});
    const [Qselections,setQSelections] = useState({});

    let formRef = useRef(null);

    const NumQuests = Object.keys(props.questions).length

    function updateQuestion(QId,selections=undefined){
        if(!selections){
            selections = questions[QId].props.selections
        }
        let updatedProps = {
            ...questions[QId].props,
            'selections':selections
        };
        let updatedQ = <Question {...updatedProps}/>;

        setQuestions((questions)=>{
            let questions2 = {...questions}
            questions2[QId] = updatedQ;
            return questions2
        })

        return updatedQ;
        
    }

    let handleAnswerSelections = function (currentQId,question){
        // console.log('store currentQId',currentQId)
        return (newSelsLis)=>{
            // console.log('quiz component', newSelsLis,currentQId)
            setQSelections((Qselections)=>{
                let Qselections2 = {}
                for(let key of Object.keys(Qselections)){
                    // {...Qselections}
                    Qselections2[key]=Qselections[key]
                }
                Qselections2[currentQId] = newSelsLis

                let updatedQProps = {
                    ...questions[currentQId].props,
                    'selections':Qselections2[currentQId]
                };
                
                // console.log('updated props',updatedQProps)
                let updatedQ = updateQuestion(currentQId,Qselections2[currentQId]);
                setComponent(updatedQ)

                // console.log(currentQ,currentQId,'In setState',Qselections,Qselections2)
                return Qselections2
            }); 
        }
    }
    //handles qinfo same as current question and qinfo already in created questions
    function postQuestion(qInfo){
        if (qInfo.id!=currentQId){

            if(questions[qInfo.id]){
                let updatedQ = updateQuestion(qInfo.id)
                setComponent(updatedQ)
                setCurrentQId(qInfo.id)
            }
            else{
                // console.log('key : ',Object.keys(questions).length)
                let Qselections2 = Qselections
                Qselections2[qInfo.id] = []                
                setQSelections(Qselections2)
                
                const currentQId2 = qInfo.id;
                setCurrentQId(currentQId2);

                let lastQuest = currentQ===(totQuests-1);
                
                let question = <Question 
                key={Object.keys(questions).length} 
                selections={Qselections2[currentQId2]} 
                QId={currentQId2}
                questionInfo={qInfo} 
                handleAnswerSelections={handleAnswerSelections(currentQId2)} showNext={nextQuestion}
                isLast={lastQuest}
                />
                
                let questions2 = questions
                questions2[qInfo.id] = question
                setQuestions(questions2)
                
                setComponent(question)
            }
        }
    }

    function getNumCorrect(){
        let numCorrect = 0;
        for(let key of Object.keys(questions)){
            let questInfo = props.questions.filter((value)=>value.id===key)[0];
            // console.log(JSON.stringify(questInfo.correct))
            if(JSON.stringify(Qselections[key])==JSON.stringify(questInfo.correct)){
                numCorrect++;
                // console.log('Correct!',key)
            }
        }
        return numCorrect;
    }

    function setNewQuiz(){
        // setCurrentQ(-1);
        setCurrentQId(-1);
        setQuestions({});
        setQSelections({});
        setComponent(setup_form);
        setCardComp(<></>);
    }
    useEffect(()=>{
        // console.log(questions)
        if(currentQ==-1){}
        else{
            if(currentQ==totQuests){
                // console.log(Qselections)
                let numCorrect = getNumCorrect();
                // console.log(numCorrect)
                setCardComp(<Card correct={numCorrect} total={totQuests} startNewQuiz={setNewQuiz}/>);
                setCurrentQ(-1);
            }
            else{
                let qInfo=props.questions[currentQ];
                postQuestion(qInfo);
            }

        }
    })
    function navQuizHandler(qInd){
        if(currentQ!=-1){
            setCurrentQ(qInd);
        }
    }
    let nextQuestion = ()=>{
        // let numQuests = props.questions.length
        // setTotal((value)=>value+1)
        if(currentQ<totQuests-1){
            setCurrentQ((value)=>{
                return value+1
            });
        }
        else{
            //submit quiz
            setCurrentQ((value)=>{
                return value+1
            });
        }

    }
    let setupDone = function(){
        //this represents child, but the variables of this function can be accessed too.
        let inputElements = [...formRef.current.children].slice(1,4).map((value,i)=>{
            return value.children[1]
        });
        let totQs = inputElements[0].value;
        if(totQs>NumQuests){
            console.log('Max number of questions is ',NumQuests,'!');
            totQs = NumQuests;
        }
        setTotQuests(totQs);
        setCurrentQ((value)=>{
            return value+1;
        });
    }
    const setup_form =  <Setup_form cat_values={props.cats} setupDone={setupDone} formRef={formRef}/>
    const [component,setComponent] = useState(setup_form)
    const [cardComp,setCardComp] = useState(<></>)

    let quizNav = <QuizNav numQuestions={totQuests} currentQ={currentQ} questions={questions} navQuizHandler={navQuizHandler}/>;

    return <>
        <div className="whole-cont">
            {component.props.selections?
                <div>
                    {quizNav}
                </div>
                :<></>
            }
            {component}
        </div>
        {cardComp}
    </>;
}