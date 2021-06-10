import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Logo} from "./Logo";
import MenuButton from "./MenuButton";
import {Menu} from "./Menu";

class LeftColumn extends Component {

    render() {
        return <>
        {!this.props.visible ?
            <MenuButton className="grey-color" style={{left: '20px'}}/>
        :
            <div id="left-column">
                <div className="column-inner">
                    <Logo/>
                    <MenuButton/>
                    <Menu/>
                </div>
            </div>
        }
        </>;
    }
}

export default connect((state) => state.mainMenu)(LeftColumn);

