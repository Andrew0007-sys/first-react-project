import React,{Component} from 'react';

function ComponentC(props){
    return(
        <div>
            <button onClick = {(evt) => props.getRandom(Math.random())}>knopo4ka</button> 
        </div>
    )
}

export default ComponentC;