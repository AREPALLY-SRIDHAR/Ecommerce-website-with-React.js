
import CartContext from './cartContext';

import CartItem from './CartItem';


import './Cart.css';

const Cart = () => {
  return (
    <CartContext.Consumer>
      {value => {
        const { cartList } = value; 
        return (
          <div className='cart-container'>
          
            <h1 className='cart-head'>Cart Items</h1>
            {cartList.length !==0 &&<ul>
              {cartList.map(each => (
                
               <CartItem key={each.id} details={each}/>
              
              ))}
            </ul>
            }
            {cartList.length ===0 && <div className='nothing'>
              <h1>Nothing Added to Cart</h1>
            </div>}
          </div>
        );
      }}
    </CartContext.Consumer>
  );
};

export default Cart;
