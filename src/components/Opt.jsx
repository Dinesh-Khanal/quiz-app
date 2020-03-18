import React, {useState} from 'react';

function Opt(props){
    const[cl, setCl] = useState("");
    const checkAnswer =(e) =>{
    let t = e.target;
    let cn = String(props.ans);
    let ncl;
    if(cn === t.id){
        ncl = "correct";
     }else{
         ncl= "wrong";
      }
     setCl(ncl);
     props.checkAns(ncl);
     setTimeout(() => setCl(""),1000);
    }
    return (
        <>
        <div className={cl} id={props.id} onClick={checkAnswer}>{props.Opts}</div>
        </>
    );
    
}
export default Opt;