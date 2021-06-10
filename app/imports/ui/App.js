import React, { Component } from 'react';
import LeftColumn from "./layout/left-column/LeftColumn";
import RightColumn from "./layout/right-column/RightColumn";
import {HomePage} from "./pages/HomePage";
import {createBrowserHistory} from "history";
import {Route, Router} from "react-router";
import CategoryHome from "./pages/CategoryHome";

export default class extends Component {
    render() {
        return <>
            <LeftColumn/>
            <div id="center-column">
                <Router history={createBrowserHistory()}>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/category/:categoryId" component={CategoryHome} />
                </Router>
            </div>
            <RightColumn/>
        </>;
    }
}