import React from 'react';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

export const Item = (props) => {
    return (
        <li className="item">
            <a href="#">
                <img src={props.icon}/>
                <div className="link-name"><span>{props.name}</span></div>
                <KeyboardArrowRight style={{fontSize: '45px'}} className="arrow"/>
            </a>
        </li>
    );
};