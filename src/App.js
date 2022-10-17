/** @format */
// import React,{Component}from 'react'
// import { useState } from 'react'
// import Product from './components/Product/Product'

// class App extends Component {
//   state = {
//     products: [
//       { title: 'React.js', value: '90$' },
//       { title: 'Node.js', value: '80$' },
//       { title: 'JavaScript.js', value: '70$' }
//     ]
//   }

//   clickHandler = () => {
//     this.setState({
//       products: [
//         { title: 'React.js', value: '100$' },
//         { title: 'Node.js', value: '120$' },
//         { title: 'JavaScript.js', value: '130$' }
//       ]
//     })
//   }

//   render() {
//     return (
//       <div className='container' id='title'>
//         <h1>Shoping Center</h1>
//         {this.state.products.map(product => {
//           return <Product name={product.title} price={product.value} />
//         })}
//         <button onClick={this.clickHandler}>Click</button>
//       </div>
//     )
//   }
// }
// export default App

// functional component:
// const App = () => {
//   const [products, setProducts] = useState([
//     { title: 'React.js', value: '100$' },
//     { title: 'Node.js', value: '120$' },
//     { title: 'JavaScript.js', value: '130$' }
//   ])
//   console.log(products)
//   const clickHandler = () => {
//     setProducts([
//       { title: 'React.js', value: '150$' },
//       { title: 'Node.js', value: '160$' },
//       { title: 'JavaScript.js', value: '140$' }
//     ])
//   }
//   return (
//     <div className='container' id='title'>
//       <h1>Shopping Center</h1>
//       {products.map(product => {
//         return <Product name={product.title} price={product.value} />
//       })}
//       <button onClick={clickHandler}>Click</button>
//     </div>
//   )
// }
// export default App

// import MyCounter from './components/counter/MyCounter'
// // import HookCounter from './components/counter/HookCounter'
// // import HookObject from './components/HookObject'
// // import HooksArray from './components/HookArray'
// const App = () => {
//   return (
//     <div>
//        {/* <HookCounter /> */}
//       {/* <HookObject /> */}
//       {/* <HooksArray /> */}
//     </div>
//   )
// }

// export default App

// session22//
// import React, { Component } from 'react'
// import Product from './components/product/Product'
// class App extends Component {
//   state = {
//     products: [
//       { title: 'React.js', value: '90$' },
//       { title: 'Node.js', value: '80$' },
//       { title: 'JavaScript.js', value: '70$' }
//     ]
//   }

//   clickHandler = newTitle => {
//     // console.log('Change price')
//     // this.setState({
//     //   products: [
//     //     { title: 'React.js', value: '100$' },
//     //     { title: newTitle, value: '120$' },
//     //     { title: 'JavaScript.js', value: '130$' }
//     //   ]
//     // })
//   }

//   render() {
//     return (
//       <div className='container' id='title'>
//         <h1>Shoping Center</h1>
//         {this.state.products.map(product => {
//           return (
//             <Product
//               name={product.title}
//               price={product.value}
//               click={() => this.clickHandler('newTitle')}
//             />
//           )
//         })}
//         <button onClick={this.clickHandler}>Click</button>
//       </div>
//     )
//   }
// }
// export default App

// session 24 Extract ProductList Component//
// import React, { Component } from 'react'
// import ProductList from './components/productlist/ProductList'
// import './App.css'
// class App extends Component {
//   state = {
//     products: [
//       { title: 'React.js', value: '90$' },
//       { title: 'Node.js', value: '80$' },
//       { title: 'JavaScript.js', value: '70$' }
//     ]
//   }

//   clickHandler = newTitle => {
//     // console.log('Change price')
//     // this.setState({
//     //   products: [
//     //     { title: 'React.js', value: '100$' },
//     //     { title: newTitle, value: '120$' },
//     //     { title: 'JavaScript.js', value: '130$' }
//     //   ]
//     // })
//   }

//   render() {
//     return (
//       <div className='container' id='title'>
//         <h1>Shoping Center</h1>
//         <ProductList />

//         <button onClick={this.clickHandler} className='Product'>
//           Click
//         </button>
//       </div>
//     )
//   }
// }
// export default App

// session25
import React, { Component } from 'react'
import ProductList from './components/productlist/ProductList'
import NavBar from './components/navBar/NavBar'
import ClassCounter from './components/counter/ClassCounter'
import './App.css'
import FunctionalCounter from './components/counter/FunctionalCounter'
import ClassTimer from './components/counter/ClassTimer'
import FunctionalTimer from './components/counter/FunctionalComponent'
import Wrapper from './components/hoc/Wrapper'
import ClickCounter from './components/hocExample/ClickCounter'
import HoverCounter from './components/hocExample/HoverCounter'
class App extends Component {
  constructor(props) {
    super(props)
    // console.log('App.js constructor')
  }
  state = {
    products: [
      { title: 'React.js', value: '90$', id: 1, quantity: 1 },
      { title: 'Node.js', value: '80$', id: 2, quantity: 2 },
      { title: 'JavaScript.js', value: '70$', id: 3, quantity: 3 }
    ],
    isShow: true
  }
  removeHandler = id => {
    console.log('clicked', id)
    const filteredId = this.state.products.filter(p => p.id !== id)
    this.setState({ products: filteredId })
  }
  incrementHandler = id => {
    // console.log('clicked on', id)
    // const products = [...this.state.products] //to have a copy from state= i.e. clone
    // const selectedItem = products.find(p => p.id === id)
    // selectedItem.quantity++
    // console.log(products)
    // this.setState({ products })

    //session 39
    // 1. id => ok
    // 2. index
    const index = this.state.products.findIndex(item => item.id === id)
    console.log(index)
    // 3. clone the selected index an update the qty
    const product = { ...this.state.products[index] }
    product.quantity++
    // 4. update products
    const products = [...this.state.products]
    products[index] = product
    this.setState({ products })
  }

  decrementHandler = id => {
    // console.log('clicked on', id)
    // const products = [...this.state.products]
    // const selectedItem = products.find(p => p.id === id)
    // if (selectedItem.quantity === 1) {
    //   const filteredProducts = products.filter(p => p.id !== id)
    //   this.setState({ products: filteredProducts })
    // } else {
    //   selectedItem.quantity--
    //   this.setState({ products })}
    const index = this.state.products.findIndex(item => item.id === id)
    console.log(index)

    const product = { ...this.state.products[index] }

    if (product.quantity === 1) {
      const filteredProducts = this.state.products.filter(p => p.id !== id)
      this.setState({ products: filteredProducts })
    } else {
      const products = [...this.state.products]
      product.quantity--
      products[index] = product
      this.setState({ products })
    }
  }

  changeHandleProduct = (event, id) => {
    // console.log(event.target.value, id)
    // const products = [...this.state.products] //to have a copy from state= i.e. clone
    // const selectedItem = products.find(p => p.id === id)
    // selectedItem.title = event.target.value
    // this.setState({ products })

    const index = this.state.products.findIndex(item => item.id === id)
    console.log(index)

    const product = { ...this.state.products[index] }
    product.title = event.target.value

    const products = [...this.state.products]
    products[index] = product
    this.setState({ products })
  }
  // state = {
  //   products: [
  //     { title: 'React.js', value: '90$' },
  //     { title: 'Node.js', value: '80$' },
  //     { title: 'JavaScript.js', value: '70$' }
  //   ]
  // }
  //

  // shouldComponentUpdate(nextProps, nextState) {
  //   return true
  // }
  render() {
    // console.log('App.js,render')
    // return (
    //   <div className='container' id='title'>
    //     <h1>Shopping Center</h1>

    //     <NavBar
    //       totalItems={this.state.products.filter(p => p.quantity > 0).length}
    //     />
    //     <ProductList
    //       products={this.state.products}
    //       onDelete={this.removeHandler}
    //       onIncrement={this.incrementHandler}
    //       onDecrement={this.decrementHandler}
    //       onChangeproduct={this.changeHandleProduct}
    //     />
    //     {/* <ClassCounter />
    //     <FunctionalCounter /> */}
    //     {/* <button onClick={() => this.setState({ isShow: !this.state.isShow })}>
    //       {this.state.isShow ? 'Hide' : 'Show'}
    //     </button>
    //     {this.state.isShow && <ClassTimer />}  */}

    //     {/* <button onClick={() => this.setState({ isShow: !this.state.isShow })}>
    //       {this.state.isShow ? 'Hide' : 'Show'}
    //     </button>
    //     {this.state.isShow && <FunctionalTimer />} */}
    //   </div>

    // )

    //session47
    // return (
    //   <>
    //     <h1>Shopping Center</h1>

    //     <NavBar
    //       totalItems={this.state.products.filter(p => p.quantity > 0).length}
    //     />
    //     <ProductList
    //       products={this.state.products}
    //       onDelete={this.removeHandler}
    //       onIncrement={this.incrementHandler}
    //       onDecrement={this.decrementHandler}
    //       onChangeproduct={this.changeHandleProduct}

    //     />

    //   </>
    // )

    //session 48
    return (
      <>
        <ClickCounter name='mahdi sayyed' />
        <HoverCounter />
      </>
    )
  }
}
export default Wrapper(App, 'container')
