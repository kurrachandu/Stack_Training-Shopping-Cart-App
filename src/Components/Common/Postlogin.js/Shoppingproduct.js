import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import ProductPopUPdialog from './ProductPopUPdialog';

function Shoppingproduct(props) {
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
        handleprocart();
      }} className='add-to-cart-btn'>Add to cart</button>
      {popupFlag ?
      <ProductPopUPdialog setPopupFlag={setPopupFlag} />: null}
    </div>
  );
}

export default Shoppingproduct;
