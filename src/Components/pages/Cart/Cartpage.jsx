import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incItem,decItem, removeItem } from '../../../redux/slices/cartSlice';
import Header from '../../Header/Header';
import '../Cart/Cartpage.css';
function Cartpage(props) {
  const items = useSelector((state) => state.Cart);
  const total = items.reduce((a, b) => a + b.props.price * (b.quantity || 0), 0);
  const dispatch = useDispatch();

  return (
    <div className="cartpage">
      <Header />

      <h2>Cart Items</h2>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((product) => (
            <tr key={product.props.id}>
              <td className='image-cell'>
                <img className='image-cell' src={product.props.image} alt={product.props.title} />
              </td>
              <td>{product.props.id}</td>
              <td>{product.props.title}</td>
              <td>Rs {product.props.price}</td>
              <td>{product.props.category}</td>
              <td>({product.quantity})</td>
              <td className='actions-cell'>
                <button
                  className="add-to-cart-btn1"
                  onClick={() => dispatch(incItem(product))}
                >
                  +
                </button>
                <button
                  className="add-to-cart-btn2"
                  onClick={() => dispatch(decItem(product))}
                >
                  -
                </button>
                <button
                  className="remove-from-cart-btn"
                  onClick={() => dispatch(removeItem(product))}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total-price">Total Price: Rs {total}</div>
    </div>
  );
}

export default Cartpage;
