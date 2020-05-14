import React,{Component} from 'react';
import FuncComp from './FuncComp';

class ClassComp extends Component{
    state = {
        text: "Тут буде текст"
    }
    
    getInputText = (e) => {
        let vl = e.target.value;
        this.setState ({
            text: vl
        });
    }

    render(){
        return(
            <div>
                 <FuncComp
                    value={this.state.text}
                /> 
                <input
                    onChange={this.getInputText}
                    value={this.state.text}
                    placeholder='Напиши щось'
                />
            </div>
        )
    }
}

export default ClassComp;