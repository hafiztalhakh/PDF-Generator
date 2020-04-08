import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-server';

export default class App extends Component {

    state = {
        name: '',
        reciptId: '',
        price1: '',
        price2: '',
    }

    createPdf = () => {
        axios.post('create-pdf', this.state)
    }

    render() {
        return (
            <div className="App">
                <input type="text" placeholder="Name" name="name" onChange={(e) => { this.setState({ name: e.target.value }) }} />
                <input type="number" placeholder="Recipt ID" name="reciptId" onChange={(e) => { this.setState({ reciptId: e.target.value }) }} />
                <input type="number" placeholder="Price 1" name="price1" onChange={(e) => { this.setState({ price1: e.target.value }) }} />
                <input type="number" placeholder="Price 2" name="price2" onChange={(e) => { this.setState({ price2: e.target.value }) }} />
                <button onClick={this.createPdf}>Submit</button>
            </div>
        )
    }
} 