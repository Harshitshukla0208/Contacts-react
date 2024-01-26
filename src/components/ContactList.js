import React from "react";
import ContactCard from "./ContactCard"

const ContactList = (props) => {
    console.log(props);

    // Check if props.contacts is defined and is an array
    if (!props.contacts || !Array.isArray(props.contacts)) {
        return <div>No contacts available</div>; // or any other fallback UI
    }

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact = {contact}></ContactCard>
        );
    });

    return <div className="ui called list">{renderContactList}</div>;
};

export default ContactList;
