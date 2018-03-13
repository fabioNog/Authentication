
import React from 'react'
import { Route,Switch } from 'react-router-dom';
import App from '../App';
import Login from '../Login/login'



export default () => {
    return (
            <Switch>
                <Route exact path= "/" component={App} />
                <Route exact path="/login" component={Login} />

            </Switch>
    )
}
