import React from 'react'

const Rating = ({ value, text }) => {
    return (
        <div className='rating'>
            <Star value={value} number={1} />
            <Star value={value} number={2} />
            <Star value={value} number={3} />
            <Star value={value} number={4} />
            <Star value={value} number={5} />
            <span>{text && text}</span>
        </div>
    )
}

const Star = ({ value, number }) => {
    return (
        <span>
            <i className={
                value >= number
                    ? 'fas fa-star'
                    : value >= (number - 0.5)
                        ? 'fas fa-star-half-alt'
                        : 'far fa-star'
            }></i>
        </span>
    )
}
export default Rating
