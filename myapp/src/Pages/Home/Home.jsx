import React from 'react'
import Header from "../../Components/Header/Header"
import About from "../../Components/About/About"
import Qualities from "../../Components/Qualities/Qualities"
import Menu from '../../Components/Menu/Menu'
import HeroSection from '../../Components/HeroSection/HeroSection'
import Team from "../../Components/Team/Team"
import From from '../../Components/Form/From'
export default function Home() {
  return (
    <>
        <Header/>
        <About/>
        <Qualities/>
        <Menu/>
        <HeroSection/>
        <Team/>
        <From/>
        
    </>
  )
}
