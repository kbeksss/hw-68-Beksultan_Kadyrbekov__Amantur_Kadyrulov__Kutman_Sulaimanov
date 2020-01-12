import React, {Component} from 'react';
import './ToDo.css';
import {connect} from "react-redux";
import {addToDo} from "../../store/action";

class ToDo extends Component {
    state = {
        inputValue: '',
    };
    changeValue = (e) => {
        this.setState({inputValue: e.target.value})
    };
    saveToDo = () => {
        if(this.state.inputValue){
            this.props.addItem(this.state.inputValue);
            this.setState({inputValue: ''});
        }
    };
    render() {
        return (
            <div className='ToDo'>
                <form action="#" onSubmit={this.saveToDo}>
                    <div className='FormWrap'>
                        <input type="text" value={this.state.inputValue} onChange={this.changeValue}/>
                        <button type='submit'>Save</button>
                    </div>
                    <div className='ToDos'>
                        {this.props.stateToDos.map(todo => (
                            <div className='ToDoItem' key={todo.id}>
                                <p>{todo.value}</p>
                                <button className='delete-btn'>delete</button>
                            </div>
                        ))}
                    </div>
                </form>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        stateToDos: state.todos,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        addItem: (value) => dispatch(addToDo(value)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
