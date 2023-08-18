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
<div className="ProductDialog">
</div>

</div>
  </div>
  )
}

export default ProductPopUPdialog;