import React,{ useState } from "react";
import '../Prelogin/App.css';
import { useNavigate } from "react-router-dom";
import { useSelector} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartPopUPdialog from "./CartPopUPdialog";
function Header(){
    const navigate = useNavigate();
    const items = useSelector(state =>state.Cart);
    const [popupFlag,setPopupFlag] = useState(false);

    function handlecart() {
        setPopupFlag(true)
      }
      // eslint-disable-next-line no-unused-vars
      function handlecLose() {
        setPopupFlag(false)
      }


    return(
        <div className="header-list">
            <p onClick={()=> navigate("/home")}>Home</p>
            <p onClick={() => navigate("")}>Products</p>
            <p onClick={handlecart}>
            <FontAwesomeIcon icon={faShoppingCart} />
            Cart ({items.length})
            </p>
            <p className="log-out" onClick={()=>navigate("/success")}>
                Logout
                </p>
                {popupFlag ?
                <CartPopUPdialog setPopupFlag={setPopupFlag} />: null}
        </div>
    );
}

export default Header;