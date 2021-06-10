import React from 'react';
import {Item} from "./Item";

export const Menu = () => {
    return (
        <ul id="menu">
            <Item name="React" icon="/img/react-logo.svg" />
            <Item name="Meteor" icon="/img/meteor-logo.svg" />
            <Item name="PHP" icon="/img/php-logo.svg" />
            <Item name="Javascript" icon="/img/js-logo.svg" />
        </ul>
    );
};