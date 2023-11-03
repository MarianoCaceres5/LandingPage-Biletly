import React from 'react'
import ticketImage from '../assets/ticket.png'
import '../style.css'

export default function SecondSlide() {
  return (
    <>
      <img src={ticketImage} alt="logo" style={{width: '40%', margin: 30}}/>
      <div>
        <h1 style={{color: 'white', }}>Biletly protocol</h1>
        <h4 style={{color: 'white', fontWeight: 'light', marginTop: 10, width: '80%'}}>Ensure your Tickets and transactions using <span style={{color: '#0EDB88', }}>Web3 Technology</span></h4>
        <button className='contactButton'>Contact Us</button>
      </div>      
    </>
  )
}
