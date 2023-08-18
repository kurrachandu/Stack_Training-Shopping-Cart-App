import React,{ useState } from "react";
import '../Header/Header.css';
import { useNavigate } from "react-router-dom";
import { useSelector} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
function Header(){
    const navigate = useNavigate();
    const items = useSelector(state =>state.Cart);
    const cartLinkOnClick = () => {
        if (items.length > 0) {
          navigate("/cartpage");
        } else {
          alert("CART IS EMPTY! ADD A PRODUCT");
        }
      };

    return(
        <div className="header-list">
            <p onClick={()=> navigate("/home")}>Home</p>
            <p onClick={cartLinkOnClick}>
            <FontAwesomeIcon icon={faShoppingCart} />
            Cart ({items.length})
            </p>
            <p className="log-out" onClick={()=>navigate("/success")}>
                Logout
                </p>
        </div>
    );
}
export default Header;