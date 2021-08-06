import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from 'app/layout/App';
import Panel from 'admpanel/layout/Panel';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" render={props => <App {...props} />} exact />
                <Route path="/adm-panel" render={props => <Panel {...props} />}  />
            </Switch>
        </Router>
    )
}
