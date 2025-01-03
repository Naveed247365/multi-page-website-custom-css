import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'
import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <h1 className='logo'>Eir Buds</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/EirBuds">EirBuds</Link>
        <Link href="/Contact">Contact</Link>
        <FaShoppingCart style={{ color: 'white', fontSize: '20px' }}/>
      </nav>
    </header>
  )
}

export default Header