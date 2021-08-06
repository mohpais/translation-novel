import React, { Component } from 'react';
import routes from 'app/Routes';
import { Route, Switch } from 'react-router-dom';
import Header from 'app/components/Header';

export class App extends Component {
    getRoutes(routes) {
        return routes.map((prop, key) => {
            return (
                <Route 
                    key={key}
                    path={prop.path}
                    render={props => 
                        <prop.component {...this.state} {...props} />
                    }
                    exact />
            );
        });
    }
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Switch>{this.getRoutes(routes)}</Switch>
                <h1>Footer</h1>
            </div>
        )
    }
}

export default App;
