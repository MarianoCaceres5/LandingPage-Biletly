import React from "react"
import FirstSlide from '../components/FirstSlide'
import SecondSlide from '../components/SecondSlide'
import '../style.css'

export default function Home() {
  return (
    <>
      <div className="blackSlideContainer">
        <FirstSlide />
      </div>
      <div className="greySlideContainer">
        <SecondSlide />
      </div>
    </>
  )
}