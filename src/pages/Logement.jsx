import React, {useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Logements from '../datas/logements.json'
import Accordeon from '../components/Accordeon'
import Rating from '../components/Rating'
import Carrousel from '../components/Carrousel'


const Logement = () => {

  {/*  On récupère l'id en paramètre URL, avec {id} entre accolades sinon reconnu en tant qu'objet */}
  const { id } = useParams();

  {/* on utilise le hook useNavigate pour rediriger vers la page Error si l'id n'est pas dans le fichier json */}
  const navigate = useNavigate();
  {/* on utilise le hook useEffect à la racine du coposant  */}
  useEffect(() => {
    {/* on utilise la méthode .find pour chercher le logement avec son id dans le fichier json */}
    let appart = Logements.find((app) => app.id === id);
    if (!appart) {
       navigate("/Error");
    }
  },[]);

  
	const appart = Logements.find((app) => app.id === id); 
  {/* on utilise la destructuration d'objet JS pour créer les constantes et les valeurs associées */}
	if (appart !== undefined) { 
		const {title, pictures} = appart;
  
    
  return (
        
      <div key={appart.id} className='logement__container'>

        <Carrousel id={id} pictures={pictures} title={title} />

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
  )} else {
    
  }
}
  

export default Logement

