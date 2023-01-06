import React, { useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Logements from '../datas/logements.json'
import Accordeon from '../components/Accordeon'
import Rating from '../components/Rating'

const Logement = () => {

  {/* on récupère l'id de l'url avec useParams */}
  const params = useParams ();

  {/*on fait une redirection vers la page error si l'id est inconnue */}
  {/*const navigate = useNavigate();
  useEffect(() => {
    let appart = Logements.find((appart) => params.id === appart.id);
    if (!appart) {
      navigate("/Error");
   }
  });  */}

  const appart = Logements.find((appart) => params.id === appart.id); 
    
  return (
        
      <div key={appart.id} className='logement__container'>
          <section className='logement__head'>
            <div className='logement__title'>
              <h2>{appart.title}</h2>
              <h3>{appart.location}</h3>
              <div className='tags'>
                {appart.tags.map((tag, id) => (
                  <div className='tag' key={id}>{tag}</div>
                ))}
              </div>
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
          
          <section className='logement__body'>
              <div className='logement__description'>
                <Accordeon title='Description' content={appart.description} />
              </div>
              <div className='logement__equipment'>
                <Accordeon title='Equipements' contentArray={appart.equipments}/>
              </div>
          </section> 
        </div>
  )
}

export default Logement