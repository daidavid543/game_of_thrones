import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from 'react-router-dom';
import Header from "../components/Header";
import CollectionEdit from "../pages/Collection/edit";
import Collection from "../pages/Collection";

const AppWrapper = (props: any) => {
    const headerConfig = {
        title: 'Game Of Thrones Fan',
        breadcrumb: [
            {title: 'Home', link: '/'},
            {title: 'Dashboard', link: null},
            {title: 'Widget management', link: '/widgets'},
        ]
    }

    return (
        <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">

            <Header headerConfig={headerConfig}/>
            <div className="d-flex flex-column flex-column-fluid">
                <div className="content fs-6 d-flex flex-column-fluid" id="kt_content">
                    <div className="container-xxl" style={{maxWidth: '100%'}}>
                        {props.children}
                    </div>
                </div>
            </div>


            <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">

                <div className="container-xxl d-flex flex-column flex-md-row flex-stack">

                    <div className="text-dark order-2 order-md-1">
                        <span className="text-muted fw-bold me-2">2021©</span>
                        <a className="text-gray-800 text-hover-primary">Game Of Thrones Fan</a>
                    </div>


                    <ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
                        <li className="menu-item">
                            <a target="_blank" className="menu-link px-2">About</a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link px-2">Support</a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link px-2">Contact</a>
                        </li>
                    </ul>

                </div>

            </div>

        </div>
    )
}

export default function RouterApp() {
    return (
        <Router>
            <AppWrapper>
                <Switch>
                    <Route path="/collection/:collection/detail/:id?">
                        <CollectionEdit/>
                    </Route>
                    <Route path="/collection/:collection">
                        <Collection/>
                    </Route>

                    <Route path="/">
                        <Redirect to={'/collection/houses'}/>
                    </Route>
                </Switch>
            </AppWrapper>
        </Router>
    );
}
