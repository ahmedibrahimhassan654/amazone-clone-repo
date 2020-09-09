import React from 'react'
import './header.css'
function Header() {
  return (
    <div className='header'>
      <img
        className='header_logo'
        src='https://images.app.goo.gl/xmfhD42KmtwDBKtR6'
        alt='amazone icon'
      />
      <div className='header_search'>
        <input className='header_search_input' />

        {/* icon */}

        
      </div>
      <div className='header_nav'>
        <div className='header_navoption'>
          <span className='headeroptionone'>welcomegust</span>
          <span className='headeroptionone'>signe in</span>
        </div>
        <div className='header_navoption'>
          <span className='headeroptiontwo'>returns</span>
          <span className='headeroptiontwo'>&order</span>
        </div>
        <div className='header_navoption'>
          <span className='headeroptiontwo'>Your</span>
          <span className='headeroptiontwo'>Prime</span>
        </div>
        <div className='header_navoption'>
          {/* icon */}
          {/* number */}
        </div>
      </div>
    </div>
  )
}

export default Header
