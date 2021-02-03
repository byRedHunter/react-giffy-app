import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import GifGridItem from './GifGridItem'
import Spinner from './Spinner'

const GifGrid = ({ category }) => {
	const { data, loading } = useFetchGifs(category)

	return (
		<article className='gif'>
			<h3 className='gif__title animate__animated animate__rollIn'>
				{category}
			</h3>

			{loading && <Spinner />}

			<div className='gif__images'>
				{data.map((gif) => (
					<GifGridItem key={gif.id} title={gif.title} url={gif.url} />
				))}
			</div>
		</article>
	)
}

export default GifGrid
