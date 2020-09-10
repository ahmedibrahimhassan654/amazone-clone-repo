import React from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import './product.css'
function Product({ name, title, price, rate }) {
  return (
    <div className='product '>
      <p className='product_name'>{name} </p>
      <p className='product_info'>{title}</p>
      <p className='product_info'>
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className='rate_product'>
        {/* {Array(rate)
          .fill()
          .map((_, i) => {
            ;<p>
             
            </p>
          })}
           */}
        <StarBorderIcon />
      </div>
      <img
        src='https://img.freepik.com/free-vector/car-service-center-accessories-composition_98292-7431.jpg?size=338&ext=jpg&ga=GA1.2.2127651176.1599598800'
        alt=''
      />
      <button className='product_button'>go to basket</button>
    </div>
  )
}

export default Product
