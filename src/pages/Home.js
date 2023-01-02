import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Img from '../assets/IMG-home.png'


const Home = () => {
  return (
    <div>
      <Header />
      <div className='bannier'>
          <section className='bannier__section'>
            <img className='bannier__img' src={Img} alt='photo paysage'></img>
            <div className='bannier__img-overlay'>
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