import React from "react";

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    }
    add = (event) => {
        event.preventDefault(); //i dont want my page to refresh
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory !!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "", email: ""});
    }       
    render() {
        return (
            <div className="ui main">
                <h2>AddContact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" 
                            name="name" 
                            placeholder="Name" 
                            value={this.state.name}
                            onChange={(event) => this.setState({name: event.target.value})}>
                        </input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" 
                            name="email" 
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(event) => this.setState({email: event.target.value})}>
                        </input>
                    </div>
                    <div>
                        <button className="ui button blue">Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddContact;