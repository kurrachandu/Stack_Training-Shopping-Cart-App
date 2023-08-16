import React from 'react'

function ProductPopUPdialog(props) {
    function handlecLose() {
        props.setPopupFlag(false)
      }
  return (
    <div className="appDialog">
        
    <div className="window">
      <div className="header">
      <div onClick={handlecLose}>X</div>
      
</div>
<div className='propop'>
  <h1>Product is added</h1>
  </div>
{/* <div onClick={handlecLose}>X</div>
</div> */}
<div className="ProductDialog">
    
{/* <h3>Item Added to Cart</h3> */}
        {/* <p>{props.title} has been added to your cart.</p> */}
</div>

</div>
  </div>
  )
}

export default ProductPopUPdialog;