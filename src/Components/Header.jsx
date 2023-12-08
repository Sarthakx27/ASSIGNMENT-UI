import React from 'react'

const Header = () => {
  return (
    <>
    <header className=' font-display'>
      <div className=' w-5/6 flex flex-row mx-auto justify-between py-4'>
        <div className="logo flex items-center">
          <img src="https://www.cantechnologies.co.in/wp-content/uploads/2020/03/CAN-TECHNOLOGIES-LOGO-01-134x26.png" alt="" />
        </div>
        <nav className='flex items-center'>
          <ul className='flex gap-12'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Our Products</li>
            <li>Industries</li>
            <li>Methodology</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Contact</button>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header