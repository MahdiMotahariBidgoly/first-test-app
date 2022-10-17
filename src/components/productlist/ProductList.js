/** @format */

import React, { Component } from 'react'
import Product from '../product/Product'
class ProductList extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('ProductList.js componentDidUpdate')
    if (prevProps !== this.props.products) {
      //some AJAX call=> and gets new data
    }
  }
  renderProduct = () => {
    // if (this.state.products.length === 0)
    //   return <div>there is no product in cart</div>
    const { onChangeproduct, onDecrement, onDelete, onIncrement, products } =
      this.props
    return products.map(product => {
      return (
        <Product
          product={product}
          onDelete={() => onDelete(product.id)}
          onIncrement={() => onIncrement(product.id)}
          onChangeproduct={e => onChangeproduct(e, product.id)}
          onDecrement={() => onDecrement(product.id)}
        />
      )
    })
  }
  render() {
    const { products } = this.props
    return (
      <div>
        {!products.length && <div>go to the shopping</div>}
        {this.renderProduct()}
      </div>
    )
  }
}

export default ProductList
