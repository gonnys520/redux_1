import React, {Component} from "react"
import {connect} from 'react-redux'

class ControllPanel extends Component{

    changeColor = (e) => {

        const codeValue = e.target.getAttribute("data-code")
        console.log(codeValue)

        const actionData = {
            color:codeValue
        }
        this.props.dispatch({type:"change",data:actionData})

    }

    render(){
        return(
            <div>
                <h3>ControllPanel</h3>
                <button onClick={this.changeColor} data-code="red">RED</button>
                <button onClick={this.changeColor} data-code="green">GREEN</button>
                <button onClick={this.changeColor} data-code="blue">BLUE</button>
            </div>
        )
    }
}

export default connect()(ControllPanel)