import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const routes: React.FC = () => (
    <Switch>
        <Route exact path='/'>{SignIn}</Route>
        <Route path='/signup'>{SignUp}</Route>
    </Switch>
)
export default routes;