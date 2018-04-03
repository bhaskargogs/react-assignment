import React from 'react';

const charcomponent = (props) => {
    return (
        <div style={{display : 'inline-block', padding: 16, textAlign: 'center', margin: 16, border: '1px solid black'}}>
            {props.chars.map((char,index)=>{
                return <div key={index} style={{display: 'inline-block'}}><p>{char}</p>{char.length}</div>
            })}
        </div>
    )
}

export default charcomponent;