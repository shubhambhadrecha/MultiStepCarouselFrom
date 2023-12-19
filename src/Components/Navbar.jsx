import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='py-3 bg-purple-400'>
            <ul className='flex'>
                <li className='mx-3 cursor-pointer'>Home</li>
                <li className='mx-3 cursor-pointer'>About</li>
                <li className='mx-3 cursor-pointer'>Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
