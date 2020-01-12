import React, {Fragment} from 'react';
import Counter from "./containers/Counter/Counter";
import {Route, Switch} from "react-router";
import ToDo from "./containers/ToDo/ToDo";
import {NavLink} from "react-router-dom";
import './App.css';

const App = () => {
    return (
        <Fragment>
            <nav className='Navigation'>
                <div className='container'>
                    <NavLink to='/' exact>Counter</NavLink>
                    <NavLink to='/todo'>To Do</NavLink>
                </div>
            </nav>
            <Switch>
                <Route path='/' exact component={Counter}/>
                <Route path='/todo' component={ToDo}/>
            </Switch>
        </Fragment>
    );
};

export default App;
