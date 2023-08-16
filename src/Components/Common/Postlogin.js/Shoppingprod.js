import React,{useState, useEffect} from 'react';
import Shoppingproduct from './Shoppingproduct';
import Header from './Header';
function Shoppingprod() {
    const [products, updateProducts] = useState([]);
    useEffect(() => {
        getProducts();
    },[]);

    async function getProducts(){
        let res = await fetch('https://fakestoreapi.com/products');
        let productlist = await res.json();
        updateProducts(productlist);
    }

    // if (products.length === 0) {
    //     return (
    //       <div>
    //         {/* <h1></h1> */}
    //       </div>
    //     );
    //   }

  return (
    <div className='product-list-container'>
      <Header/>
      <div className='product-list'>
        {products.map((p) =>(
            <Shoppingproduct {...p} key={p.id} />
        ))}
      </div>
    </div>
  );
}

export default Shoppingprod;
