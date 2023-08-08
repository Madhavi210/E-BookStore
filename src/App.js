import React, { Component } from 'react';
import Hello from './components/Hello';
import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';
import Navbar from './components/navbar';
import ProductList from './components/ProductList';

function App() {
  const productList = [
    {price: 99099 ,
      name:"Iphone",
      quantity : 0
    },
    {price: 999 ,
      name:"readme note",
      quantity : 0
    }
  ]
  return (
    <>
    {/* <Navbar title="navbar"/> */}
    <h2>hello</h2>
    {/* <main className='container'>
      <ProductList productList={productList}/>
    </main> */}
    {/* <Footer /> */}

    <div>
  <Button variant="text" startIcon={<ShoppingCartRounded />}>
    Add to Cart
  </Button>
  <Button variant="contained" startIcon={<ShoppingCartRounded />}>
    Add to Cart
  </Button>
  <Button variant="outlined" startIcon={<ShoppingCartRounded />}>
    Add to Cart
  </Button>
</div>
    </>
  );
}

export default App;
