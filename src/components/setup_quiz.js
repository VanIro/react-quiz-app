import './styles/setup_quiz.css'

export default function Setup_form(props){
    let title=<h1>Setup Quiz</h1>
    let number_inp = <>
            <div><label htmlFor='numQuestsInp'>Number of Questions</label></div>
            <input id = 'numQuestsInp' type='number'/>
        </>
    const cat_options = props.cat_values.map((value,i)=><option value={value} key={'value_'+i}>{value}</option>)
    
    let category_inp = <>
            <div><label htmlFor='questCatInp'>Category</label></div>
            <select id = 'questCatInp' type='dropdown'>
                {cat_options}
            </select>
        </>
    const dif_options = [
        'Easy','Medium','Hard'
    ].map((value,i)=><option value={value} key={'value_'+i}>{value}</option>)
    let difficulty_inp = <>
            <div><label htmlFor='questDifInp'>Difficulty</label></div>
            <select id = 'questDifInp' type='dropdown'>
                {dif_options}
            </select>
        </>
    

    return <>
    <form className='setupForm' onSubmit={(e)=>{
        e.preventDefault();  
        props.setupDone();
    }} ref={props.formRef}>
        {title}
        <div className='inpContainer'>{number_inp}</div>
        <div className='inpContainer'>{category_inp}</div>
        <div className='inpContainer'>{difficulty_inp}</div>
        
        
        
        {/* <br/> */}
        <button type='submit' className='submit-button' >Start</button>
    </form>
    </>
}