import React, { useState } from 'react'
import Prev from '../assets/images/arrow-back.svg'
import Next from '../assets/images/arrow-forward.svg'


const Carrousel = ({ id, title, pictures }) => {
	{/* On initialise le carrousel à 0 */}
    const [currentImg, setCurrentImg] = useState(0);

    {/* Flèche preview : Si la currentImg est à 0 (position initiale) alors on repasse currentImg à 'pictures.length - 1' pour revenir à la dernière image du slider, sinon on va à l'image précédente */}
	const prevSlide = () => {
		setCurrentImg (
			currentImg === 0 ? pictures.length - 1 : currentImg - 1
		) 
	}

    {/* Flèche next : Si la currentImg est la dernière du slider, on repasse à 0 (position initiale), sinon on va à l'image suivante */}
	const nextSlide = () => {
		setCurrentImg ( 
            currentImg === pictures.length - 1 ? 0 : currentImg + 1
		)
	}

	return (
		<section className='slider__container'>

			{pictures.map((picture, index) => (
				<div key={id + index}>
					{index === currentImg && (
						<img src={picture} alt={title} className='slider__image' />
					)}
				</div>
			))}

            {/* on affichage les flèches uniquement si le tableau "pictures" contient plus d'une image */}
			{pictures.length > 1 && ( 
				<img src={Prev} alt='flèche preview' className='slider__prev' onClick={prevSlide} />
			)}

			{pictures.length > 1 && (
				<img src={Next} alt='flèche next' className='slider__next' onClick={nextSlide} />
			)}

            {/* On affiche le numéro de l'image courante ainsi que le nombre total d'images */}
            <span className='slider__number'>
                {currentImg +1} / {pictures.length} 
            </span>
		</section>
	)
}


export default Carrousel