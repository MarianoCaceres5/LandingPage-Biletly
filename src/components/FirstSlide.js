import React from 'react'
import logo from '../assets/logo.png'

export default function FirstSlide() {
  return (
    <>
      <div>
        <h1 style={{color: 'white', }}>Buy with confidence, <span style={{color: '#0EDB88', }}>trust the future</span></h1>
        <h3 style={{color: 'white', fontStyle: 'italic', fontWeight: 'normal', marginTop: 10, width: '80%'}}>“We seek to provide real confidence to the users”</h3>
      </div>
      <img src={logo} alt="logo" style={{width: '40%', margin: 30}}/>
    </>
  )
}
