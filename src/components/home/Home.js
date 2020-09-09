import React from 'react'
import './home.css'
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
          {/* <Product />
          <Product/>
          <Product/> */}
        </div>
        <div className='homeRow'>{/* <Product />
          <Product /> */}</div>
        <div className='homeRow'>
          {/* <Product/>
           */}
        </div>
      </div>
    </div>
  )
}

export default Home
