import React, { useState, useEffect, useContext } from 'react';
import ProductList from './components/productList';
// import SearchBox from './components/searchBox';
import Cart from './components/cart';
import Header from './components/header';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import CartContext from './context/cart/CartContext';

const App = () => {
  const [products, setProducts] = useState([]);
  // const [searchValue, setSearchValue] = useState('');

  const { cartItems } = useContext(CartContext);

  const cartTul = cartItems.reduce((key, item) => item.nutrients[0].amount + key, 0);

  const getProductRequest = async () => {
    const url = 'https://vitl-static-api.s3-eu-west-1.amazonaws.com/fe-test.json';

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setProducts(responseJson.products);
  };

  useEffect(() => {
    getProductRequest();
  }, []);

  return (
    <>
      <Header heading='vitl' />
      <div className="container-fluid product-app">
        <div className="row">
          <Cart />
        </div>
        {cartTul >= 1600 && (
          <div className="text-center text-danger">You have reached your limit (Tolerable Upper Limit)</div>
        )}
        <div className="product-wrapper row">
          {products.map((product, index) => (
            <ProductList cartTul={cartTul} key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
