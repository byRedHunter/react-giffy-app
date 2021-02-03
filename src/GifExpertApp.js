import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
	//const categories = ['One Piece', 'One Punch', 'Samurai X']
	const [categories, setCategories] = useState(['HunterXHunter'])

	return (
		<>
			<header className='header'>
				<h1 className='title'>GiffyApp</h1>

				<AddCategory setCategories={setCategories} />
			</header>

			<section className='gifs'>
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</section>
		</>
	)
}

export default GifExpertApp
