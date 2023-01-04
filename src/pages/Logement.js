import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Carrousel from '../components/Carrousel'
import Footer from '../components/Footer'

const Logement = () => {

  const params = useParams ();


  return (
    <div>
      <Header />
      <Carrousel />
      <div>Infos logement : {JSON.stringify(params)}</div>
      <Footer />
    </div>
  )
}

export default Logement