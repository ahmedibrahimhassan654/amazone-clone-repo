import React from 'react'
import './home.css'
import Product from './../products/Product'
function Home() {
  return (
    <div className='home'>
      <div className='homeContainer'>
        <img
          className='headerImage'
          src='https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/02/AMAZON-1200x537.png'
          alt='headerImage'
        />
        <div className='homeRow'>
          <Product
            name='مجموعه ادوات للسياره'
            title='دائما ستحتاج هذا المنتج'
            price={453.4}
            rate={3}
            image='https://img.freepik.com/free-vector/car-service-center-accessories-composition_98292-7431.jpg?size=338&ext=jpg&ga=GA1.2.2127651176.1599598800'
          />
          <Product />
        </div>
        <div className='homeRow'>
          <Product />
          <Product />
          <Product />
        </div>
        <div className='homeRow'>
          <Product />
        </div>
      </div>
    </div>
  )
}

export default Home
