import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
    const contacts = [
        {
            id: "1",
            name: "Naman",
            email: "naman@admin.com"
        },
        {
            id: "2",
            name: "Samarth",
            email: "samarth@admin.com"
        },
        {
            id: "3",
            name: "Priyanshu",
            email: "priyanshu@admin.com"
        },
        {
            id: "4",
            name: "Himanshu",
            email: "himanshu@admin.com"
        },
        {
            id: "5",
            name: "Prateet",
            email: "prateet@admin.com"
        }

    ]
    return (
        <div className="ui container">
            <Header />
            <AddContact />
            <ContactList contacts = {contacts}/>
        </div>
    )
}

export default App;
