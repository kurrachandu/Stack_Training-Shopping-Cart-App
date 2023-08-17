import React from 'react'
import { decItem, incItem, removeItem } from '../../../redux/slices/cartSlice'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './cartPopup.css';
function CartPopUPdialog(props) {

    function handleclose(){
      props.setPopupFlag(false)
    }
  const items = useSelector((state) => state.Cart);
  const total = items.reduce((a,b) => a + b.props.price* (b.quantity || 0),0);
     
  const dispatch = useDispatch();
  return (
    <div className='appDialog'>
      <div className='window1'>
        <div className='header1'>
          <div>Cart</div>
          <div onClick={handleclose}>X</div>
        </div>
        {items.map((product) => (
          <div className='appDetails'>
            <img src={product.props.image} alt={product.props.title}/>
            <div>{product.props.title}</div>
            <div>Rs {product.props.price}</div>
            <div>Category: {product.props.category}</div>
            <div>Quantity :({product.quantity})</div>
            <button className='remove-from-cart-btn' onClick={e => dispatch(removeItem(product))}>X</button>
            <div className='buttons'>
            <button className='add-to-cart-btn1' onClick={(e) => dispatch(incItem(product))}>+</button>
            <button className='add-to-cart-btn2' onClick={(e) => dispatch(decItem(product))}>-</button>
            </div>
            <div className='Price'>Total Price : {total} </div>
            </div>
        ))}
      </div>
      
    </div>
  )
}

export default CartPopUPdialog;
