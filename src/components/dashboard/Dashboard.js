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
    console.log('--------------');
    console.log(this.props.dog);
    console.log(this.props.cat);
    const dog = this.props.dog || '';
    const cat = this.props.cat || '';
    console.log('--------------');
    console.log(dog);

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
            <tr className="petRow">
              <td className="petImage">
                <img className="image" src={dog.imageURL}></img>
              </td>
              <td className="petDescription right">
                <h2 className="header">{dog.name}</h2>
                <h3 className="header">Age: {dog.age}, Sex: {dog.sex}, Breed: {dog.breed}</h3>
                <p>{dog.description}</p>
                <p className="story">Story: {dog.story}</p>
                <button className="adoptMe">Adopt Me!</button>
              </td>
              <td className="gap"></td>
              <td className="petImage">
                <img className="image" src={cat.imageURL}></img>
              </td>
              <td className="petDescription petDescriptCat">
                <h2 className="header">{cat.name}</h2>
                <h3 className="header">Age: {cat.age}, Sex: {cat.sex}, Breed: {cat.breed}</h3>
                <p>{cat.description}</p>
                <p className="story">Story: {cat.story}</p>
                <button className="adoptMe">Adopt Me!</button>
              </td>
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
