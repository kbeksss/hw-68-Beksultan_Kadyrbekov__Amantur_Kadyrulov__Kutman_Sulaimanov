import React, {Fragment} from 'react';
import Counter from "./containers/Counter/Counter";
import {Route, Switch} from "react-router";

const App = () => {
    return (
        <Fragment>
            <Switch>
                <Route path='/' component={Counter}/>
            </Switch>
        </Fragment>
    );
};

export default App;
