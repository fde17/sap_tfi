import React from 'react';
import { Route, Switch } from 'react-router';
import App from './components/App';
import Login from './components/Login';
import Home from './components/Home';
import HomePartner from './components/HomePartner';
import Signup from './components/Signup';
import SignupPartner from './components/SignupPartner';
import SignupPartnerSuccess from './components/SignupPartnerSuccess';
import Purchase from './components/Purchase';
import PurchaseSucccess from './components/PurchaseSuccess';

const Routes = () => {
    return (
        <App>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/homePartner" component={HomePartner} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/signupPartner" component={SignupPartner} />
                <Route exact path="/signupPartnerSuccess" component={SignupPartnerSuccess} />
                <Route exact path="/purchase" component={Purchase} />
                <Route exact path="/purchaseSuccess" component={PurchaseSucccess} />

                <Route path="/" component={Login} />
            </Switch>
        </App>
    )
};

export default Routes;
