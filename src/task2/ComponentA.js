import React,{Component} from 'react';
import ComponentB from './ComponentB';

class ComponentA extends React.Component{
    constructor(props){
        super(props)
    this.getRandom = this.getRandom.bind(this)    
    this.state = {
        count: 0
    }
}
    getRandom(evt){
        this.setState({
            count: this.state.count + evt*1000
        })
    }

    render(){
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <ComponentB getRandom = {this.getRandom} />
            </div>
        )
    }

}

export default ComponentA;
