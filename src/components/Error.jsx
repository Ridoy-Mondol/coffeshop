import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error-div'>
      <p className="black-para">404</p>
      <h1 className="text-center white-para overflow-y-hidden ">Page Not Found</h1>
      <button className="home-btn abt-btn">
        <Link to='/coffeshop/' className='text-decoration-none text-white'>
            Home
        </Link>
      </button>
    </div>
  )
}

export default Error
