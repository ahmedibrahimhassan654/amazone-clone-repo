import React from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import './product.css'
function Product({ name, title, price, rate, image }) {
  return (
    <div className='product '>
      <p className='product_name'>{name} </p>
      <p className='product_info'>{title}</p>
      <p className='product_info'>
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className='rate_product'>
        {Array(rate)
          .fill()
          .map((_, i) => (
            <p>
              <StarBorderIcon />
            </p>
          ))}
      </div>
      <img src={image} alt='' />
      <button className='product_button'>go to basket</button>
    </div>
  )
}

export default Product