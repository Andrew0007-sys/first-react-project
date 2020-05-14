import React,{Component} from 'react'; 
import ComponentC from './ComponentC';

function ComponentB(props){
    return(
        <div>
            <ComponentC getRandom ={props.getRandom} />    
        </div>
    )
}

export default ComponentB;