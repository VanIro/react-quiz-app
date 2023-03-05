import './styles/quizNav.css'

export default function QuizNav(props){
    // console.log(props.numQuestions)
    function clickHandler(event){
        // console.log(event.currentTarget)
        let qInd = parseInt(event.currentTarget.getAttribute('key_is'));
        // console.log(qInd);
        props.navQuizHandler(qInd);
    }
    let questNavELs = []
    console.log(props.currentQ)
    for (let i=0;i<props.numQuestions;i++){
        let sel_class=' ';
        if(i===props.currentQ){
            sel_class+='selected';
        }
        let navEl = <div className={"quiz-nav-el"+sel_class} key={i} key_is={i} id={'qNav-'+i} onClick={clickHandler}>
            <span className='quiz-nav-el-text'>{'Q'+i}</span>
        </div>;
        questNavELs.push(navEl)
    }

    return<>
        <div className='quiz-nav-cont'>
            <div className='quiz-nav-title'>
                Questions:
            </div>
            <div className="quiz-nav-el-cont">
                {questNavELs}
            </div>
        </div>
    </>
}