import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './views/About'
import Home from './views/Home'
import IG from './views/IG'
import News from './views/News'
import Product from './views/Product'
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Tommy',
      age: 10000
    }
  }

  happyBirthday = ()=>{
    this.setState(
      {age: this.state.age +1}
    )
  };







  render() {
    return (
      <div>
        <Navbar myName={this.state.name}/>
        {/* <h1>Hi, i am {this.state.name} and my age is {this.state.age} </h1>
        <button onClick={()=>this.happyBirthday()}>Happy Birthday</button> */}
        <div className='container d-flex justify-content-center'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/news' element={<News />} />
          <Route path='/instagram' element={<IG />} />
          <Route path='/products' element={<Product />} />
        </Routes>
        </div>
      </div>
    )
  }
}