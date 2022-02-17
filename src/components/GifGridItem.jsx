
import React from 'react'

export const GifGridItem = ({ img }) => {
    const { id, title, url } = img
    return (
        <div className='card animate__animated animate__fadeIn'>
            <picture className='img'>
                <img src={url} alt={title} />
            </picture>
            <p>{img.title}</p>
        </div>
    )
}
