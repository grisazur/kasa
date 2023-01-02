import React from 'react'
import Header from '../components/Header'
import Img from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.png'
import Footer from '../components/Footer'


const About = () => {
  return (
    <div>
      <Header />
      <div className='bannier'>
          <section className='bannier-section'>
            <img className='bannier-img' src={Img} alt='photo paysage'></img>
            <div className='bannier-img-overlay'></div>
          </section>
      </div>
      <Footer />
    </div>
  )

}

export default About