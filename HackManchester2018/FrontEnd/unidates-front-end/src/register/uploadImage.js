import React, { PropTypes, Component } from 'react'

class Content extends Component {

    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.refs.fileUploader.click();
    }

    render() {
        return (
            <div className="body-content">
                <div className="add-media" onClick={this.handleClick.bind(this)}>
                    <h1>Upload Profile Picture</h1>
                    <input type="file" id="file" ref="fileUploader" style={{display: "none"}}/>
                </div>
            </div>
        );
    }
}

export default Content