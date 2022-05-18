import React, {Suspense} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";


const LoginPage = React.lazy(() =>
    import(/* webpackChunkName: "views-user" */ '../pages/auth/loginPage')
);

const RegisterPage = React.lazy(() =>
    import(/* webpackChunkName: "views-user" */ '../pages/auth/registerPage')
);


const AuthView = ({match}) => {
    return (
        <div>

            <Suspense fallback={<div className="loading"/>}>


                <Switch>

                    <Route path={`${match.url}/login`} render={(props) => <LoginPage {...props}/>}/>
                    <Route path={`${match.url}/register`} render={(props) => <RegisterPage {...props}/>}/>

                    <Redirect to={`/auth/login`}/>

                </Switch>


            </Suspense>

        </div>
    );
};

export default AuthView;
