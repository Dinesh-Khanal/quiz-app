import React, {useState} from 'react';

function Quiz(){
    return(
        <React.Fragment>
            <div className="quiz-container">
                <div className="question-number"><h3>Question number 1 of 7</h3></div>
                <div className="question">What is your name ?</div>
                <div className="options"> 
                    <div>Dinesh</div>
                
                </div>
                <div className="btn">Next Question </div>
                <div className="answer-tracker">
                </div>
            </div>
            <div className="popup-container">
                <div className="popup">
                <h2>Sample Quiz Application</h2>
                <p>This is the sample quiz application designed by Shailesh Khanal during the practice period of learning React. You can modifi it according to your requirement and enjoy it. Thank you.</p>
                <button className="btn">Start Quiz</button>
                </div>
            </div>
    </React.Fragment>
    )
}

export default Quiz;
