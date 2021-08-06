import React, { Component } from 'react';
import routes from 'admpanel/Routes';
import Sidebar from 'admpanel/components/Sidebar'
import Header from 'admpanel/components/Header'
import { Route, Switch } from 'react-router-dom';
import 'assets/styles/admpanel.css'

export class Panel extends Component {
    getRoutes(routes) {
        return routes.map((prop, key) => {
            return (
                <Route 
                    key={key}
                    path={prop.layout + '/' + prop.path}
                    render={props => 
                        <prop.component {...props} />
                    }
                    exact />
            );
        });
    }
    render() {
        return (
            <div className="wrapper-adm">
                <Sidebar />
                <div className="main-panel">
                    <Header />
                    <div className="content">
                        <div className="container-fluid">
                            <Switch>{this.getRoutes(routes)}</Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Panel;
