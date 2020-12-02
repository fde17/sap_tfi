import React from 'react';
import { Route, Switch } from 'react-router';
import App from './components/App';
import Login from './components/Login';
import Home from './components/Home';

const Routes = () => {
    return (
        <App>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/home" component={Home} />
                {/* <Route exact path="/subject" component={Subject} />
                <Route exact path="/carrera" component={Carrera} />
                <Route exact path="/alumno" component={Alumno} /> */}
                <Route path="/" component={Login} />
            </Switch>
        </App>
    )
};

export default Routes;
