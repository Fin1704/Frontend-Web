import { Box, Button, Typography } from '@mui/material'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import 'animate.css'
import PartnersInvestors from '../components/PartnersInvestors'

function Home() {
	const navigate = useNavigate()

	return (
		<Box
			className='animate__animated animate__bounceIn'
			sx={{
				padding: '40px',
				alignContent: 'center',
				width: '100%',
				height: '90vh',
				overflowY: 'auto',
				scrollbarWidth: 'none',
				'&::-webkit-scrollbar': {
					display: 'none',
				},
			}}>
			<Box height={'70vh'} sx={{ alignItems: 'center' }}>
				<Typography
					variant='h3'
					sx={{
						color: 'white',
						fontWeight: 700,
						lineHeight: 1,
						mb: 2,
						fontSize: {
							xs: '1.5rem',
							sm: '2rem',
							md: '2.5rem',
						},
					}}>
					{' '}
					At S.GAME.S Studio
				</Typography>
				<Typography
					variant='subtitle1'
					sx={{
						color: 'white',
						fontSize: {
							xs: '0.6rem',
							sm: '0.7rem',
							md: '0.8rem',
						},
						lineHeight: 1.4,
						mb: 2,
					}}>
					We revolutionize the gaming experience by bridging
					traditional gaming with the limitless possibilities of
					blockchain technology. Our mission is to empower gamers to
					actively participate in open-market trades for in-game items
					across their favorite titles. Leveraging the cutting-edge
					Unity game engine and advanced blockchain solutions, we
					create seamless integrations that enhance gameplay without
					disrupting the immersive experience.
				</Typography>
				<Typography
					variant='subtitle1'
					sx={{
						color: 'white',
						fontSize: {
							xs: '0.6rem',
							sm: '0.7rem',
							md: '0.8rem',
						},
						lineHeight: 1.4,
						mb: 2,
					}}>
					With over 8 years of expertise in developing Unity-based
					games for PC and mobile, our studio ensures that players can
					explore features like NFTs and decentralized economies
					effortlessly—often without even realizing the complex
					technology at play. Join us as we redefine the boundaries of
					gaming innovation!
				</Typography>
				<Button
					sx={{
						lineHeight: 1,
						background:
							'linear-gradient(93.94deg, #E699F9 4.51%, #8DDBF1 93.95%)',
						color: 'black',
						fontWeight: 550,
						// fontWeight: 'bold',
						padding: '8px 24px',
						borderRadius: '8px',
						textTransform: 'none',
						'&:hover': {
							background:
								'linear-gradient(93.94deg, #E699F9 4.51%, #8DDBF1 93.95%)', // Maintain gradient on hover
							opacity: 0.8,
						},
					}}
					onClick={() => {
						navigate('/gallery')
					}}>
					Explore games
				</Button>
				<PartnersInvestors />
			</Box>
		</Box>
	)
}

export default Home
