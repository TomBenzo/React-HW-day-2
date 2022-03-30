import React, { Component } from 'react'
import Store from '../components/Store';

export default class Product extends Component {
    constructor (){
        super();
        this.state = {
            products: []
        }
    }


    componentDidMount = async () => {
        const res = await fetch(`http://127.0.0.1:5000/api/products`);
        const data = await res.json();
        // console.log(data)
        const myProducts = data.products
        this.setState({
            products : myProducts
        })
    }

  render() {
    //   console.log(this.state.articles)
    return (
      <div className='row justify-content-around'>
          {this.state.products.map((prod,i)=><Store key={i} product={prod}/>)}
      </div>
    )
  }
}

