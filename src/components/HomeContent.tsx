'use client';
import { useRouter } from 'next/navigation';

const HomeContent = () => {
  const router = useRouter();

  const handleShopNow = () => {
    router.push('/EirBuds');
  };

  return (
    <div>
        <section className='hero' style={{ backgroundImage: "url(hero.webp)"}}>
            <div>
                <h1 className='fade-in'>Welcome to EirBuds</h1>
                <p>Discover the perfect sound for your lifestyle</p>
                <button onClick={handleShopNow}>Shop Now</button>

            </div>
        </section>
    </div>
  )
}

export default HomeContent