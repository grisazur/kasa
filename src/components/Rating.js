import React from 'react';
import starFull from '../assets/images/star-full.svg';
import starEmpty from '../assets/images/star.svg';

const Rating = ({ rateValue, rateType }) => {
    {/* On déclare le tableau d'étoiles, de 0 à 5 */}
    const range = [1, 2, 3, 4, 5]

    return (
        <div className='rating__items'>
            {range.map((rangeElem, key) =>
                rateValue >= rangeElem ? (
                    <img src={starFull} alt='rating positif' key={key} />
                ) : (
                    <img src={starEmpty} alt='rating négatif' />
                )
            )}
        </div>
    );
};

export default Rating;