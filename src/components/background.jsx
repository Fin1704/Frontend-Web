import { Box } from '@mui/material'
import 'animate.css'
import React from 'react'

import Bg from '../assets/bg.jpg'
import '../assets/stars-anim.css'

const Background = ({ children }) => {
	return (
		<>
			<div
				className='fixed inset-0 bg-center bg-repeat-y -z-20'
				style={{
					backgroundImage: `url(${Bg})`,
				}}>
				{/* Stars or other animations */}
				<Box className='stars1' />
				<Box className='stars2' />
				<Box className='stars3' />
				{/* Render children */}
			</div>

			{children}
		</>
	)
}

export default Background
