
import { Component } from 'react';

import Home from './Components/Home'

import Cart from './Components/Cart';

import {v4 as newid} from 'uuid'

import CartContext from './Components/cartContext';

import { BrowserRouter,Routes, Route } from 'react-router-dom';

import './App.css';

class App extends Component{

  state={cartList:[]}
  
  addCartItem = (name,url,cash,quantity) => {
    let total=cash*quantity
    alert(`${name} added to the Cart`)
    let Item={id:newid(),itemname:name,itemurl:url,itemcash:cash,itemquantity:quantity,itemtotal:total}
    
    this.setState(prevState => ({cartList: [...prevState.cartList, Item]}))
  }
  
  deleteCartItem=(num)=>{
    const {cartList}=this.state
    let newcarts=cartList.filter((each)=>each.id!==num)
    this.setState({cartList:newcarts})
  }
  
  render(){
    const {cartList}=this.state
    return (
        <BrowserRouter>
        <CartContext.Provider
          value={{
            cartList,
            addCartItem: this.addCartItem,
            deleteCartItem: this.deleteCartItem,
          }}
        >
          <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path='/cart' element={<Cart/>}/>
          </Routes>
          </CartContext.Provider>  
        </BrowserRouter>
      );
}}
        

export default App;
