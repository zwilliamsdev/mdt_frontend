import React, { Component } from 'react'

const data = require("../MOCK_MESSAGES.json");

export class Message extends Component {
    // TODO: Add character counter
    render() {
        return (
            <div id="message" style={{marginTop: '25px'}}>
                <button className="btn btn-info" style={{marginBottom: '10px'}}>View Messages <span className="badge badge-pill badge-warning">{data.length}</span></button>
                <h3>Compose Message</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="messageTo">To</label>
                        <input type="text" className="form-control" id="messageTo" placeholder="person1; person2;"></input>
                        <small id="messageToHelp" className="form-text text-muted">Available groups: @all, @command, @dispatch. Seperate multiple contacts with ;</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="messageBody">Message</label>
                        <textarea className="form-control" id="messageBody" maxLength="500" rows="5" placeholder="Message body goes here..."></textarea>
                    </div>
                    <button className="btn btn-success btn-block"><i className="fa fa-paper-plane"></i> Send</button>
                    <button className="btn btn-danger btn-block"><i className="fa fa-trash"></i> Erase</button>
                </form>
            </div>
        )
    }
}

export default Message
