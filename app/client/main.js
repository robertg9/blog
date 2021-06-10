import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from '../imports/ui/App.js';
import {blogStore} from "./store";

Meteor.startup(() => {
    render(
        <Provider store={blogStore}><App/></Provider>,
        document.getElementById('render-target')
    );
});