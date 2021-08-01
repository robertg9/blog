import React, {useState} from 'react';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {useHistory, useParams} from "react-router";

const Item = (props) => {
    const {categoryId} = useParams();
    const history = useHistory();

    const itemNameUrl = props.name.toLowerCase();
    const isActive = categoryId === itemNameUrl;

    const changeCategoryHandle = (itemNameUrl) => {
        history.push(`/category/${itemNameUrl}`);
    };

    return (
        <li className={`item`}>
            <a className={`${isActive ? 'active' : ''}`} onClick={changeCategoryHandle.bind(null, itemNameUrl)}>
                <img src={props.icon}/>
                <div className="link-name"><span>{props.name}</span></div>
                <KeyboardArrowRight className="arrow"/>
            </a>
        </li>
    );
};

export default Item;