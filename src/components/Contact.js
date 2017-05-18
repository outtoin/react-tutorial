import React from 'react'
import ReactDOM from 'react-dom'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactData : [
                {name: "Abet", phone: "010-1111-2222"},
                {name: "Betty", phone: "010-1121-2222"},
                {name: "Charlie", phone: "010-1113-2222"},
                {name: "David", phone: "010-1111-2232"}
            ]
        };
    }

    render() {
        return(
            <div>
                <h1>Contacts</h1>
                <ul>
                    {this.state.contactData.map((contact, i) => {
                        return (<ContactInfo name={contact.name}
                                            phone={contact.phone}
                                            key={i}
                                />);
                    })}
                </ul>
            </div>
        );
    }
}

class ContactInfo extends React.Component {
    render() {
        return(
            <li>{this.props.name} {this.props.phone}</li>
        )
    }
}

export default Contact;