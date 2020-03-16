import React, {useState} from 'react';
import Opt from './Opt';
import {data} from './data.js';


function Quiz(){
    const[popupDisplay, setPopupDisplay] = useState("flex");
    let n = 0;
    const displayQuiz = () =>{
        setPopupDisplay("none");
    };
    const[displayOption, setDispalyOption] = useState({
        opt: data[n].opt
    });

    
    return(
        <React.Fragment>
            <div className="quiz-container">
                <div className="question-number"><h3>Question number {n+1} of {data.length}</h3>
                </div>
                <div className="question">{data[n].q}</div>
                <div className="options"> 
                  {opt.map((qOpt,index) => (
                    <Opt />
                 ))}
                </div>
                <div className="btn">Next Question </div>
                <div className="answer-tracker">
                </div>
            
            </div>
            <div className="popup-container" style={{display:popupDisplay}}>
                <div className="popup">
                <h2>Sample Quiz Application</h2>
                <p>This is the sample quiz application designed by Shailesh Khanal during the practice period of learning React. You can modifi it according to your requirement and enjoy it. Thank you.</p>
                <button className="btn" onClick={displayQuiz}>Start Quiz</button>
                </div>
            </div>
    </React.Fragment>
    )
}

export default Quiz;
