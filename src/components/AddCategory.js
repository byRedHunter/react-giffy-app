import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('')

	const handleInputChange = (e) => {
		setInputValue(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (inputValue.trim() !== '') {
			setCategories((category) => [inputValue, ...category])
			setInputValue('')
		} else {
			console.log('Debe de escribir una categoria')
		}
	}

	return (
		<form className='add' onSubmit={handleSubmit}>
			<input
				type='text'
				className='add__input'
				placeholder='Category Name'
				value={inputValue}
				onChange={handleInputChange}
			/>
		</form>
	)
}

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
}

export default AddCategory
