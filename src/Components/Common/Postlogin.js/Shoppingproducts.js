import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../../../redux/slices/cartSlice';
import ProductPopUPdialog from './ProductPopUPdialog';
// import { useDispatch } from 'react-redux';

function Shoppingproducts(props) {
    const dispatch = useDispatch();
    const [popupFlag,setPopupFlag] = useState(false);

    function handleprocart(){
        setPopupFlag(true);
    }


  return (
    <div className='card'>
        <img src={props.image} alt={props.title}/>
        <p>{props.title}</p>
        <p>${props.price}</p>
        <p>Category: {props.category}</p>
        <button onClick={() => {
        // setButtonPopup(true);
        dispatch(addItem({props}));
        handleprocart();
      }} className='add-to-cart-btn'>Add to cart</button>
      {popupFlag ?
      <ProductPopUPdialog setPopupFlag={setPopupFlag} />: null}
    </div>
  );
}

export default Shoppingproducts;
