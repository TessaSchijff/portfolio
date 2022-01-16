import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }
    toggle(e) {
        e.preventDefault()
        ReactDOM.findDOMNode(this) &&
            (e.target == e.currentTarget || e.target.name == 'close') &&
            ReactDOM
                .findDOMNode(this)
                .classList
                .toggle('mfp-hide')
    }
    render() {
        return (
            <div id={this.props.modal} className="modal mfp-hide"  onClick={this.toggle}>
                <div className="popup-modal">
                    <img className="scale-with-grid" src={`images/portfolio/modals/m-${this.props.image}`} alt="" />
                    <div className="description-box">
                        <h4>{this.props.title}</h4>
                        <p>{this.props.description}</p>
                        <span className="categories"><i className="fa fa-tag"></i>{this.props.tags}</span>
                    </div>
                    <div className="link-box">
                        <a href={this.props.url}>Details</a>
                        <a name="close" className="popup-modal-dismiss">Close</a>
                    </div>
                </div>
            </div>
        );
    }
}

export { Modal };