import React from 'react'

const HomeContent = () => {
  return (
    <div>
        <section className='hero' style={{ backgroundImage: "url(hero.webp)"}}>
            <div>
                <h1 className='fade-in'>Welcome to EirBuds</h1>
                <p>Discover the perfect headphones <br /> for your music experience.</p>
                <button>Shop Now</button>
            </div>
        </section>
    </div>
  )
}

export default HomeContent