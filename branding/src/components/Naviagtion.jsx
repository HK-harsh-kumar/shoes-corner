import React from 'react'

const Naviagtion = () => {
  return (
    <div>
       <nav className='container'>
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">location</li>
          <li href="#">about</li>
          <li href="#">contact</li>
        </ul>
        <button>login</button>
      </nav>
    </div>
  )
}

export default Naviagtion
