import React from 'react';
import './Dashboard.css';
import { fetchCat, deleteCat } from '../../actions/cats';
import { fetchDog, deleteDog } from '../../actions/dogs';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }
  render() {
    console.log(this.props.cat);

    return (
      <div className="body">
        <div className="navBar">
          <h2 className="navBarTitle">Welcome to our site!</h2>
        </div>
        <div>
          <select className="selection">
            <option>Select Animal Type</option>
            <option>Dogs</option>
            <option>Cats</option>
            <option>Dogs and Cats</option>
          </select>
        </div>
        <table className="petTable">
          <tbody>
            <tr>
              {
                [1].map(function (i) {
                  return (
                    <div>
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
                    </div>
                  )
                })
              }
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cat: state.cat.data,
  dog: state.dog.data
})

export default connect(mapStateToProps)(Dashboard);
