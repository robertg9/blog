import React, {Component} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {connect} from 'react-redux';
import {updateStore} from "../../../../client/store";

class MenuButton extends Component {

    handleToggleMenu() {
        updateStore({mainMenu: {visible: !this.props.visible}});
    }

    render() {
        return <MenuIcon
            style={this.props.style}
            onClick={this.handleToggleMenu.bind(this)}
            id="menu-button"
            className={this.props.className}
        />;
    }
}

export default connect((state) => state.mainMenu)(MenuButton);

