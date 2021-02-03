import React from 'react'

const GifGridItem = ({ title, url }) => {
	return (
		<figure className='gif__images--gif animate__animated animate__fadeInLeft'>
			<img src={url} alt={title} title={title} />
		</figure>
	)
}

export default GifGridItem
