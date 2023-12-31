import React from 'react';
import Header from '../../Header/Header';
import shoppingimage from '../../../Assets//bg.jpg'
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductPopUPdialog from './ProductPopUPdialog';
import Shoppingproducts from './Shoppingproduct';
function Home() {
    const [products,updateProducts] = useState([]);
    const [searchInput,setSearchInput]= useState('');
    const [searchResults, setSearchResults] = useState('');
    const [popupFlag, setPopupFlag] = useState(false);
    const dispatch = useDispatch();

    useEffect(() =>{
        getProducts();
    },[products]);

    async function getProducts() {
        let res = await fetch("https://fakestoreapi.com/products");
        let productlist = await res.json();
        updateProducts(productlist);
    }

    const handleChange =(e)=>{
        const inputValue = e.target.value;
        const regex = /^[A-Za-z\s]+$/;

        if (regex.test(inputValue)) {
            setSearchInput(inputValue);
          } else {
            // If the input value does not match the pattern, remove invalid characters
            setSearchInput(inputValue.replace(/[^A-Za-z]/g, ''));
          }
    };
    

    return(
        <div className='product-list-container'>
            <div className='Home'>
                <Header/>
            <div className='hero'>
                <div className='card3 text-bg-dark text-white border-0'>
                    <img src={shoppingimage} className="card3-img" alt="Background" height="950px" />
                    <div className='card3-img-overlay d-flex flex-column justify-content-center'>
                    <div className="container">
                        <h5 className="card3-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card3-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                        </div>
                        <div className='myDiv1'>
                            <input type='text' pattern='/^[A-Za-z]+$/' placeholder='search product'
                             onChange={handleChange}
                             value={searchInput}/>
                             <div className='card2'>
                                {searchResults.length > 0 ? (
                                    searchResults.map((props) =>(
                                        <div className='card'>
                                            <img  src={props.image} alt= {props.title}/>
                                            <p>{props.id}</p>
                                            <p>{props.title}</p>
                                            <p>${props.price}</p>
                                            <p>Category: {props.category}</p>
                                            <button onClick={()=>{

                                            }} className='add-to-cart-btn'
                                            >
                                                Add to cart
                                                </button>
                                                {popupFlag ? <ProductPopUPdialog setPopupFlag={setPopupFlag}/>:null}
                                                </div>
                                    ))
                                ) : (
                                    <p></p>
                                )}
                             </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product-list'>
                {products.filter((product)=> product.title.includes(searchInput))
                .map((p)=> (
                    <Shoppingproducts {...p} key={p.id}/>
                ))}
            </div>
            </div>
        </div>
    );

}

export default Home;