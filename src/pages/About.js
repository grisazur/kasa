import React from 'react'
import Header from '../components/Header'
import Img from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.png'
import Accordeon from '../components/Accordeon'
import Footer from '../components/Footer'


const About = () => {
  return (
    <div>
      <Header />
      <div className='bannier'>
          <section className='bannier__section'>
            <img className='bannier__img' src={Img} alt='photo paysage'></img>
            <div className='bannier__img-overlay'></div>
          </section>
      </div>
      <Accordeon title='Fiabilité' content='1'/>
      <Accordeon title='Respect' content='2'/>
      <Accordeon title='Service' content='3'/>
      <Accordeon title='Sécurité' content='4'/>
      <Footer />
    </div>
  )

}

export default About