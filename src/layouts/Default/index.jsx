import { Box } from '@mui/material'
import 'animate.css'
import React from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'

const DefaultLayout = ({ children }) => {
	return (
		<>
			<Header />

			{/* Default background and stars animation */}
			<div
				className='fixed inset-0 bg-center bg-repeat-y -z-20'
				style={{
					backgroundImage: "url('/assets/bg.jpg')",
				}}>
				<Box className='stars1' />
				<Box className='stars2' />
				<Box className='stars3' />
			</div>

			{children}

			<Footer />
		</>
	)
}

export default DefaultLayout
