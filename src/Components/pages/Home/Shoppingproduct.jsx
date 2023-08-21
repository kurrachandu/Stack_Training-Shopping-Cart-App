import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import ProductPopUPdialog from './ProductPopUPdialog';
import { addItem,removeItem } from '../../../redux/slices/cartSlice';

function Shoppingproduct(props) {
    const dispatch = useDispatch();
    const [popupFlag,setPopupFlag] = useState(false);
    const loggedInUser = localStorage.getItem('loggedUserData');
    const cartItems = useSelector(state => state.Cart);

    function handleprocart(){
        setPopupFlag(true);
    }
    function handleAddToCart() {
      dispatch(addItem({ props }));
  
      // Retrieve existing cart data from local storage
      const existingCartData = JSON.parse(localStorage.getItem('cartData')) || {};
  
      // Create or update the user's cart data
      const userCartData = existingCartData[loggedInUser] || [];
      userCartData.push(props);
      existingCartData[loggedInUser] = userCartData;
  
      // Save updated cart data to local storage
      localStorage.setItem('cartData', JSON.stringify(existingCartData));
  
      handleprocart();
    }

    function handleRemoveFromCart() {
      // Remove the item from the cart data
      dispatch(removeItem({ props }));
  
      // Retrieve existing cart data from local storage
      const existingCartData = JSON.parse(localStorage.getItem('cartData')) || {};
  
      // Get the user's cart data
      const userCartData = existingCartData[loggedInUser] || [];
      
      // Remove the item from local storage cart data
      const updatedCartData = userCartData.filter(item => item.id !== props.id);
      existingCartData[loggedInUser] = updatedCartData;
  
      // Save updated cart data to local storage
      localStorage.setItem('cartData', JSON.stringify(existingCartData));
    }

  

  return (
    <div className='card'>
        <img src={props.image} alt={props.title}/>
        <p>{props.id}</p>
        <p>{props.title}</p>
        <p>Rs {props.price}</p>
        <p>Category: {props.category}</p>
        {/* <button onClick={() => {
          dispatch(addItem({props}));
        handleprocart();
      }} className='add-to-cart-btn'>Add to cart</button> */}
      <button onClick={handleAddToCart} className='add-to-cart-btn'>Add to cart</button>

      <button onClick={handleRemoveFromCart} className='remove-from-cart-btn'>
        Remove
      </button>
      {popupFlag ?
      <ProductPopUPdialog setPopupFlag={setPopupFlag} />: null}
    </div>
  );
}

export default Shoppingproduct;
