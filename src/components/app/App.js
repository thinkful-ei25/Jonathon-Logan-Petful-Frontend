import React, { Component } from 'react';
import {array} from './testArray.js/array'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petArray: [],
    };
  }
  render() {
    console.log(array)
    return (
      <div className = "body">
        <div className="navBar">
          <h2 className="navBarTitle">Welcome to our site!</h2>
        </div>
        <div>
          <select className="selection">
            <option>Dogs</option>
            <option>Cats</option>
            <option>Dogs and Cats</option>
          </select>
        </div>
        <table className="petTable">
          <tbody>
            <tr>
              <td className="petImage">
                <img className="image" src="https://img.buzzfeed.com/buzzfeed-static/static/2015-04/23/17/enhanced/webdr15/enhanced-6210-1429824367-3.jpg?downsize=700:*&output-format=auto&output-quality=auto"></img>
              </td>
              <td className="petDescription">
                <h2 className="header">Testing</h2>
                <p>Lorem Ipsum Description Text awodihaowie awdeijaw d wad wad wa dwa d awd w</p>
                <button className="adoptMe">Adopt Me!</button>
              </td>
              <td className="petImage">
              <img className="image" src="https://img.buzzfeed.com/buzzfeed-static/static/2015-04/23/17/enhanced/webdr15/enhanced-6210-1429824367-3.jpg?downsize=700:*&output-format=auto&output-quality=auto"></img>
              </td>
              <td className="petDescription">

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
