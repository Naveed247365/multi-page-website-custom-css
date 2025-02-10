'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'

export default function Header() {
  const [isNavActive, setIsNavActive] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isNavActive && !target.closest('.nav-menu') && !target.closest('.mobile-nav-button')) {
        setIsNavActive(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isNavActive]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isNavActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isNavActive]);

  const toggleNav = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsNavActive(!isNavActive);
  };

  const handleLinkClick = () => {
    setIsNavActive(false);
  };

  return (
    <header className='header'>
      <Link href="/" className="logo" onClick={handleLinkClick}>
        EirBuds
      </Link>
      <button 
        className="mobile-nav-button" 
        onClick={toggleNav}
        aria-label="Toggle navigation menu"
      >
        {isNavActive ? '✕' : '☰'}
      </button>
      <nav className={`nav-menu ${isNavActive ? 'active' : ''}`}>
        <Link href="/" onClick={handleLinkClick}>Home</Link>
        <Link href="/About" onClick={handleLinkClick}>About</Link>
        <Link href="/EirBuds" onClick={handleLinkClick}>EirBuds</Link>
        <Link href="/Contact" onClick={handleLinkClick}>Contact</Link>
        <Link href="/Cart" onClick={handleLinkClick}>
          <div style={{ cursor: 'pointer' }}>
            <FaShoppingCart style={{ color: 'white', fontSize: '24px' }}/>
          </div>
        </Link>
      </nav>
    </header>
  )
}