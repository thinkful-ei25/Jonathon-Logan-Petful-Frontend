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
  adoptDog() {
    this.props.dispatch(deleteDog());
  }
  adoptCat() {
    this.props.dispatch(deleteCat());

  }
  render() {
    // console.log('--------------');
    // console.log(this.props.dog);
    // console.log(this.props.cat);
    let dog = this.props.dog || '';
    let cat = this.props.cat || '';
    if(dog === 'No more dogs') dog = {imageURL: 'https://cdn.shopify.com/s/files/1/0396/9165/articles/we-are-sold-out_2048x.jpg?v=1495833523'};
    if(cat === 'No more cats') cat = {imageURL: 'http://www.kittenswhiskers.com/wp-content/uploads/sites/23/2016/12/cats-sold-out.jpg'}
    // console.log('--------------');
    // console.log(dog);
    console.log('test ' + this.props.dog);

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
        <table className="petTable shadow">
          <tbody>
            <tr className="petRow">
              <td className="gap"></td>
              <td className="petImage">
                <img className="image" src={dog.imageURL}></img>
              </td>
              <td className="petDescription right">
                <h2 className="header">{dog.name}</h2>
                <h3 className="header">Age: {dog.age}, Sex: {dog.sex}, Breed: {dog.breed}</h3>
                <p>{dog.description}</p>
                <p className="story">Story: {dog.story}</p>
                <button className="adoptMe" onClick={() => this.adoptDog()}>Adopt Me!</button>
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
                <button className="adoptMe" onClick={() => this.adoptCat()}>Adopt Me!</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div >
    );
  }
}

const mapStateToProps = state => ({
  cat: state.cat.data,
  dog: state.dog.data
})

export default connect(mapStateToProps)(Dashboard);
