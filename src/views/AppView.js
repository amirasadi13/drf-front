import React, {Suspense} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";


const HomePage = React.lazy(() =>
    import(/* webpackChunkName: "views-user" */ '../pages/home/homePage')
);

const AppView = ({match}) => {
    return (
        <div>

            <Suspense fallback={<div className="loading"/>}>


                <Switch>

                    <Route path={`${match.url}/home`} render={(props) => <HomePage {...props}/>}/>

                    <Redirect to={`/app/home`}/>

                </Switch>


            </Suspense>

        </div>
    );
};

export default AppView;
