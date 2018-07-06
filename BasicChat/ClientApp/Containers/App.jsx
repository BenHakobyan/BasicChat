import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Switch>
                        <Route path="/about" />
                        <Route path="/" />
                    </Switch>
                </div>
            </Router>
        );
    }
};