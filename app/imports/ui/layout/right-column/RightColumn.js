import React, {Component} from 'react';
import {connect} from 'react-redux';
import RightColumnToggleButton from "./RightColumnToggleButton";

class RightColumn extends Component {

    render() {
        return <>
        {!this.props.visible ?
            <RightColumnToggleButton className="grey-color" style={{right: '20px', left: 'auto'}}/>
            :
            <div id="right-column">
                <div className="column-inner">
                    <RightColumnToggleButton/>
                </div>
            </div>
        }
        </>;
    }
}

export default connect((state) => state.rightMenu)(RightColumn);

