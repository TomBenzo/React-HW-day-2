import React, { Component } from 'react'

export default class Store extends Component {
    render() {
        const prod = this.props.product
        return (
            <a href="/products" class = "card text-decoration-none text-dark mb-3" style={{width: '18rem'}}>
                <img src={ prod.image } class="card-img-top" alt={ prod.product_name } />
                <div class="card-body">
                    <h5 class="card-title">{ prod.product_name }</h5>
                    <p class="card-text">{ prod.description }</p>
                </div>
            </a>
        )
    }
}
