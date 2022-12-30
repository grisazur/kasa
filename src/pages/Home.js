import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Img from '../assets/IMG-home.png'


const Home = () => {
  return (
    <div>
      <Header />
      <div className='home'>
        <section className='home-section'>
          <img className='home-img' src={Img} alt='photo paysage'></img>
          <div className='home-img-overlay'>
            <p>Chez vous, partout et ailleurs</p>
          </div>
        </section>
      </div>
      <Gallery />
      <Footer />
    </div>
  )

}

export default Home