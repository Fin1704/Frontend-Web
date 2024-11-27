import { Box } from '@mui/material'
import 'animate.css' // Import Animate.css
import React from 'react'

import Bg from '../assets/bg.jpg'
import '../assets/stars-anim.css' // Assuming you have additional styles for stars

const Background = ({ children }) => {
	return (
		<div
			className='min-h-screen bg-center bg-repeat -z-20 overflow-x-hidden'
			style={{
				backgroundImage: `url(${Bg})`,
			}}>
			{/* Stars or other animations */}
			<Box className='stars1' />
			<Box className='stars2' />
			<Box className='stars3' />
			{/* Render children */}

			{children}
		</div>
	)
}

export default Background
