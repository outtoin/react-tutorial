import React from "react";
import ReactDOM from "react-dom";
import update from "react-addons-update";

class ContactEditor extends React.Component {
    constructor(props) {
        super(props);
        // default state
        this.state = {
            name: "",
            phone: ""
        };
    }

    handleChange(e) {
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClick() {
        if (!this.props.isSelected) {
            console.log("contact not selected");

            this.setState({
                name: "",
                phone: ""
            });
            return;
        }

        this.props.onEdit(this.state.name, this.state.phone);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.selectedContact.name,
            phone: nextProps.selectedContact.phone
        });
    }

    render() {
        return (
            <div>
                <p>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange.bind(this)}
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange.bind(this)}
                    />
                    <button onClick={this.handleClick.bind(this)}>
                        Edit
                    </button>
                </p>
            </div>
        );
    }
}

export default ContactEditor;
