import React from 'react';
import Img from '../assets/images/IMG-home.png'
import Gallery from '../components/Gallery';


const Home = () => {
  return (
    <div className='bannier'>
      <section className='bannier__section'>
        <img className='bannier__img' src={Img} alt='photo paysage' />
        <div className='bannier__img-overlay'>
            <p>Chez vous, partout et ailleurs</p>
        </div>
      </section>
      <Gallery />
    </div>
  )
}

export default Home