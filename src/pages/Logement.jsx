import React from 'react'
import { useParams } from 'react-router-dom'
import Logements from '../datas/logements.json'
import Accordeon from '../components/Accordeon'
import Rating from '../components/Rating'

const Logement = () => {
  {/* on récupère l'id de l'url avec useParams et les données correspondantes */}
  const params = useParams ();
  {/* on récupère les datas du fichier json */}
  let appart = Logements.find((appart) => params.id === appart.id);


  return (
    <div key={params.id} className='logement__container'>
      <section className='logement__head'>
        <div className='logement__title'>
          <h2>{appart.title}</h2>
          <h3>{appart.location}</h3>
        </div>
        <div className='logement__host'>
          <div className='logement__host__name'>
            <p>{appart.host.name}</p>
            <img className='logement__host__pic' src={appart.host.picture} alt="photo de l'hôte" />
          </div>
          <div className='logement__rating'>
            <Rating ratingType='stars' rateValue={appart.rating} />
          </div>
        </div>
      </section>
      <section className='tags'>
        {appart.tags.map((tag, id) => (
          <div className='tag' key={id}>
             {tag}
          </div>
        ))}
      </section> 
      <section className='logement__body'>
          <div className='logement__description'>
            <Accordeon title='Description' key={appart.description}/>
          </div>
          <div className='logement__equipment'>
            <Accordeon title='Equipements' key={appart.equipments.map(paragraph => <p>{paragraph}</p>)} />
          </div>
      </section> 
    </div>
  )
}

export default Logement