import React, {Component} from 'react';
import {connect} from 'react-redux';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import {updateStore} from "../../../../client/store";

class RightColumnToggleButton extends Component {

    handleToggleVisibility() {
        updateStore({rightMenu: {visible: !this.props.visible}});
    }

    render() {
        return <>
            {this.props.visible ?
                <KeyboardArrowRight
                    style={this.props.style}
                    onClick={this.handleToggleVisibility.bind(this)}
                    id="right-column-toggle-button"
                    className={this.props.className}
                />
            :
                <KeyboardArrowLeft
                    style={this.props.style}
                    onClick={this.handleToggleVisibility.bind(this)}
                    id="right-column-toggle-button"
                    className={this.props.className}
                />
            }
        </>;
    }
}

export default connect((state) => state.rightMenu)(RightColumnToggleButton);

