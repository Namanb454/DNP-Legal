import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import About from '../components/About'
import Service from '../components/Service'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Service />
      <Team />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Home
