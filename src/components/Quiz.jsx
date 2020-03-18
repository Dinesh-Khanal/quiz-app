import React, {useState} from 'react';
import Opt from './Opt';
import {data} from './data.js';

function Quiz(){
    const[popupDisplay, setPopupDisplay] = useState("flex");
    const[n, setN] = useState(0);
    const[poptext, setPoptext] = useState({
        htext: "Sample Quiz Application",
        ptext: `This is the sample quiz application designed by Shailesh Khanal during 
        the practice period of learning React. You can modifi it according 
        to your requirement and enjoy it. Thank you.`,
        btntext: "Start Quiz"
    });

    const [correct, setCorrect] = useState(Array.from({length:data.length},(v, i) => ""));

    const displayQuiz = (x) =>{
            setPopupDisplay(x);     
    };
    const correctAns = data[n].ans;
    const handleCheckAns =(rslt) =>{
        correct[n] = rslt;
        setCorrect(correct);
    }
    const handleStart = ()=>{
        if(poptext.btntext==="OK"){
            location.reload()//eslint-disable-line
        }else{
            displayQuiz("none");
        }
    }
    const onNext = () =>{
        let correctAns = correct.filter(c => c === "correct").length;
        let m;
        if(n<data.length-1){
            m = n+1;
            setN(m);  
        }else{
            setPoptext({
                htext:"Quiz Completed",
                ptext: `Total Question: ${data.length},
                        Correct Answer: ${correctAns}`,
                btntext: "OK"
        });
        displayQuiz("flex");
        }
         
    }
    
    return(
        <React.Fragment>
            <div className="quiz-container">
                <div className="question-number"><h3>Question number {n+1} of {data.length}</h3>
                </div>
                <div className="question">{data[n].q}</div>
                <div className="options"> 
                  {data[n].opt.map((qOpt,index) => (
                    <Opt key={index} id ={index} 
                    Opts={qOpt} ans={correctAns} 
                    checkAns={handleCheckAns} 
                    />
                 ))}
                </div>
                <div className="btn" onClick ={onNext} >Next Question </div>
                <div className="answer-tracker">
                    {data.map((q,i) => (<div key={i} className={correct[i]}></div>))}
                </div>
            
            </div>
            <div className="popup-container" style={{display:popupDisplay}}>
                <div className="popup">
                  <h2>{poptext.htext}</h2>
                  <p>{poptext.ptext}</p>
                  <button className="btn" onClick={handleStart}>{poptext.btntext}</button>
                </div>
            </div>
    </React.Fragment>
    )
}

export default Quiz;
