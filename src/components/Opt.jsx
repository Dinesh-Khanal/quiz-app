import React from 'react';

function Opt(props){
    
    return (
        <div style={{backgroundColor: props.optStyle}} onClick={props.onCheck}>{props.Opts}</div>
    );
}

export default Opt;