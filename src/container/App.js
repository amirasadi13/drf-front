import '../assets/css/App.css';
import React, {Suspense} from "react";
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import {Router} from "react-router";
import UserLayout from "../layouts/userLayout";
import MainLayout from "../layouts/mainLayout";

const ViewAuth = React.lazy(() =>
    import(/* webpackChunkName: "views-user" */ '../views/AuthView')
);

const ViewApp = React.lazy(() =>
    import(/* webpackChunkName: "views-user" */ '../views/AppView')
);


function App(props) {

    const history = useHistory();

    return (
        <div className="App">


            <Suspense fallback={<div className="loading"/>}>

                <Router history={history}>

                    <Switch>


                        <Route path={['/auth']}>
                            <UserLayout>
                                <Switch>

                                    <Route path={`/auth`}
                                           render={(props) => <ViewAuth {...props}/>}/>

                                </Switch>
                            </UserLayout>
                        </Route>


                        <Route path={['/app']}>
                            <MainLayout>
                                <Switch>

                                    <Route path={`/app`}
                                           render={(props) => <ViewApp {...props}/>}/>

                                </Switch>
                            </MainLayout>
                        </Route>


                        <Redirect to={'/app'}/>

                    </Switch>
                </Router>

            </Suspense>


        </div>
    );
}

export default App;
