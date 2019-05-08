// APP.js
import React, { Component } from 'react';
import Products from './components/Products';
import Filter from './components/Filter';
import Basket from './components/Basket';

import './App.css';

class App extends Component {
  state = {
    size: '',
    sort: '',
    cartItems: [],
    products: [],
    filteredProducts: []
  };

  componentWillMount() {

    if (localStorage.getItem('cartItems')) {
      this.setState({ cartItems: JSON.parse(localStorage.getItem('cartItems')) });
    }

    fetch('http://localhost:8000/products').then(res => res.json())
      .catch(err => fetch('db.json').then(res => res.json()).then(data => data.products))
      .then(data => {
        this.setState({ products: data });
        this.listProducts();
      });
  }

  handleRemoveFromCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems.filter(a => a.id !== product.id);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { cartItems: cartItems };
    })
  }

  handleAddToCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;

      cartItems.forEach(cp => {
        if (cp.id === product.id) {
          cp.count += 1;
          productAlreadyInCart = true;
        }
      });

      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
      }
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { cartItems: cartItems };
    });
  }

  listProducts = () => {
    this.setState(state => {
      if (state.sort !== '') {
        state.products.sort((a, b) =>
          (state.sort === 'lowestprice'
            ? ((a.price > b.price) ? 1 : -1)
            : ((a.price < b.price) ? 1 : -1)));
      } else {
        state.products.sort((a, b) => (a.id > b.id) ? 1 : -1);
      }
      if (state.size !== '') {
        return { filteredProducts: state.products.filter(a => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0) };
      }
      return { filteredProducts: state.products };
    })
  }
  handleSortChange = (e) => {
    this.setState({ sort: e.target.value });
    this.listProducts();
  }
  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
    this.listProducts();
  }

  render() {
    return (
      <div className="container">
        <h1>E-commerce Shopping Cart Application</h1>
        <hr />
        <div className="row">
          <div className="col-md-9">
            <Filter count={this.state.filteredProducts.length} handleSortChange={this.handleSortChange}
              handleSizeChange={this.handleSizeChange} />
            <hr />
            <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />
          </div>
          <div className="col-md-3">
            <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart} />
          </div>

        </div>

      </div>
    );
  }
}

export default App;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PRODUCTS:
import React, { Component } from 'react';
import util from '../util'
export default class Products extends Component {

    render() {
        const productItems = this.props.products.map(product => (
            <div className="col-md-4" key={product.id}>
                <div className="thumbnail text-center">
                    <a href={`#${product.id}`}onClick={(e)=>this.props.handleAddToCart(e, product)}>
                        <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
                        <p>{product.title}</p>
                    </a>
                    <b>{util.formatCurrency(product.price)}</b>
                    <button className="btn btn-primary" onClick={(e)=>this.props.handleAddToCart(e, product)}>Add to cart</button>
                </div>
            </div>
        ));

        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FILTER:

import React, { Component } from 'react';
class Filter extends Component {

    render() {


        return (
            <div className="row">
                <div className="col-md-4">
                    {`${this.props.count} products found.`}
                </div>
                //
                <div className="col-md-4">
                    <label>Order by
               <select className="form-control" value={this.props.sort} onChange={this.props.handleSortChange}>
                            <option value="">Select</option>
                            <option value="lowestprice">Lowest to highest</option>
                            <option value="highestprice">Highest to lowest</option>
                        </select>
                    </label>
                </div>
                //
                <div className="col-md-4">
                    <label > Filter Size
               <select className="form-control" value={this.props.size} onChange={this.props.handleSizeChange}>
                            <option value="">ALL</option>
                            <option value="x">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                        </select>
                    </label>
                </div>

            </div>
        )
    }
}

export default Filter;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
