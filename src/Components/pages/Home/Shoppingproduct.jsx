import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import ProductPopUPdialog from './ProductPopUPdialog';
import { addItem } from '../../../redux/slices/cartSlice';

function Shoppingproduct(props) {
    const dispatch = useDispatch();
    const [popupFlag,setPopupFlag] = useState(false);

    function handleprocart(){
        setPopupFlag(true);
    }
// function handleAddToCart(){

//   dispatch(addItem({props}));

//   const existingCartData = JSON.parse(localStorage.getItem('cartData')) || {};

//   const loggedUser = "user@125";

//   const userCartData = existingCartData[loggedUser] || [];
//   userCartData.push(props);

//   existingCartData[loggedUser] = userCartData;

//   localStorage.setItem('cartData', JSON.stringify(existingCartData));
//   handleprocart();
// }

  return (
    <div className='card'>
        <img src={props.image} alt={props.title}/>
        <p>{props.id}</p>
        <p>{props.title}</p>
        <p>Rs {props.price}</p>
        <p>Category: {props.category}</p>
        <button onClick={() => {
          dispatch(addItem({props}));
        handleprocart();
      }} className='add-to-cart-btn'>Add to cart</button>
      {/* <button onClick={handleAddToCart} className='add-to-cart-btn'>Add to cart</button> */}
      {popupFlag ?
      <ProductPopUPdialog setPopupFlag={setPopupFlag} />: null}
    </div>
  );
}

export default Shoppingproduct;
