import React, { Component } from 'react'
const data = require("../MOCK_MESSAGES.json");

export class Messages extends Component {
    createTable = () => {
        const items = [];
        data.forEach(element => items.push(
            <tr>
                <th>{element.from}</th>
                <th>{element.day}<br />{element.time}</th>
                <th>{element.messageBody}</th>
                <th><button className="btn btn-small btn-info"><i className="fa fa-reply"></i></button></th>
                <th><button className="btn btn-small btn-danger"><i className="fa fa-trash"></i></button></th>
            </tr>
        ));

        return items;
    }

    render() {
        return (
            <div id="messages" style={{marginTop: "25px"}}>
                <h3>Messages List</h3>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search for a message"></input>
                    </div>
                </form>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">From</th>
                            <th scope="col">Sent</th>
                            <th scope="col">Message</th>
                            <th scope="col">Reply</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.createTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Messages
