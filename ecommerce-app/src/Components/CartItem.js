
import './CartItem.css'

import CartContext from './cartContext'

import {AiFillCloseCircle} from 'react-icons/ai'


const CartItem =(props)=>{
    const {details}=props
    const {id,itemname,itemurl,itemquantity,itemtotal}=details
    console.log(details)
    return(
    <CartContext.Consumer>
        {value =>(
        <li className="cart-item">
        <img className="cart-product-image" src={itemurl} alt={itemname} />
        <div className="cart-item-details-container">
          <div className="cart-product-title-brand-container">
            <p className="cart-product-title">{itemname}</p>
            <p className='cart-product-brand'>Quantity : {itemquantity}</p>
          </div>
          
          <div className="total-price-delete-container">
            <p className="cart-total-price">Rs {itemtotal}/-</p>
            <button className="remove-button" type="button" onClick={()=>value.deleteCartItem(id)}>
              Remove
            </button>
          </div>
        </div>
        <button className="delete-button" type="button" onClick={()=>value.deleteCartItem(id)}>
          <AiFillCloseCircle color="#616E7C" size={20} />
        </button>
      </li>
        )}
    </CartContext.Consumer>
    )
}

export default CartItem