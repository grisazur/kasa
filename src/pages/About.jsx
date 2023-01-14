import React from 'react'
import Img from '../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash.png'
import Accordeon from '../components/Accordeon'


const About = () => {
  return (

    <div className='about'>

      <div className='bannier'>
          <section className='bannier__section'>
            <img className='bannier__img' src={Img} alt='photo paysage'/>
            <div className='bannier__img-overlay'></div>
          </section>
      </div>

      <div className='about__accordeon'>
        <Accordeon title='Fiabilité' content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
        <Accordeon title='Respect' content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plataforme."/>
        <Accordeon title='Service' content= "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
        <Accordeon title='Sécurité' content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
      </div>
      
    </div>
  )
}

export default About