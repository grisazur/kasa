import React from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import data from '../datas/logements.json'

const Gallery = () => {
    return (
        <div className='gallery'>
			{data.map((logement, id) => (
				<div className='card' key={id}>
					<Link className='card__link' to={`/logement/${logement.id}`}>
						<Card cover={logement.cover} title={logement.title} />
					</Link>
				</div>
			))}
		</div>
    )
}

export default Gallery