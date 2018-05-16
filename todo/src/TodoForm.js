import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo } from "./actions";

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
    }

    valueChangedHandler = (e) => {
        this.setState({ value: e.target.value })
    }

    render() {
        return(
        <div className="form">
            <input
                onChange={this.valueChangedHandler}
                className="form-control"
                placeholder="Todo"
                value={this.state.value}
                name="todo"
                type="todo"
            />
            <button className="btn" onClick={() => {
                this.props.addTodo(this.state.value)
                this.setState({ value: ""})
            }}>Add Todo</button>
        </div>
        );
    }
}
export default connect(null, { addTodo })(TodoForm);