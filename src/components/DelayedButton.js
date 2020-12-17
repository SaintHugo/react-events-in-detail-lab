// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component{

    handleClick = (e) => {
        // console.log('delayed')
        e.persist()
        setTimeout(() => 
            
            {this.props.onDelayedClick(e)}, this.props.delayed
        )
    }

    render(){
        return(
           <button onClick={this.handleClick}>
               Delayed Button
           </button>
        )
    }
}