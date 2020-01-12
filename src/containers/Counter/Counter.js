import React, {Component} from 'react';
import './Counter.css';
import {connect} from 'react-redux';
import {
    addToCount,
    decreaseCount,
    fetchCounter,
    increaseCount,
    subtractFromCount
} from "../../store/action";
import Spinner from "../../component/UI/Spinner/Spinner";

class Counter extends Component{
    componentDidMount() {
        this.props.fetchCounter();
    }

    render() {
        return (
            <div className='Counter'>
                <div className='Count'>{this.props.loadingState ? <Spinner/> : this.props.countState}</div>
                <div className='All-btns'>
                    <button onClick={this.props.increase}>INCREASE</button>
                    <button onClick={this.props.decrease}>DECREASE</button>
                    <button onClick={() => this.props.add(5)}>ADD 5</button>
                    <button onClick={() => this.props.subtract(5)}>SUBTRACT 5</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        countState: state.count,
        loadingState: state.loading,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        increase: () => dispatch(increaseCount()),
        decrease: () => dispatch(decreaseCount()),
        add: (val) => dispatch(addToCount(val)),
        subtract: (val) => dispatch(subtractFromCount(val)),
        fetchCounter: () => dispatch(fetchCounter()),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
