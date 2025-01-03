import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className='contact-form'>
        <h2 className='fade-in'>Contact Us</h2>
        <form>
          <input type="text" placeholder='full name' required/>
          <input type="email" placeholder='email address' required/>
          <input type="text" placeholder='phone number' />
          <textarea placeholder='your message' rows={5} required></textarea>
          <button type='submit'>send message</button>
        </form>
      </section>
    </div>
  )
}

export default Contact