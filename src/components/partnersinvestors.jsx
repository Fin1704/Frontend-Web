import { Box, Card, CardMedia, Container, styled } from '@mui/material'
import React from 'react'

const StyledCard = styled(Card)(({ theme }) => ({
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	transition: 'all 0.3s ease-in-out',
	backgroundColor: 'transparent',
	boxShadow: 'none',
	'&:hover': {
		transform: 'translateY(-10px)',
	},
}))

const CompanyIcon = styled(CardMedia)({
	width: '60px',
	height: '60px',
	margin: '0.25rem auto',
	borderRadius: '50%',
	border: '2px solid #1976d2',
	padding: '2px',
	backgroundSize: 'cover',
	transition: 'transform 0.3s ease',
	'&:hover': {
		transform: 'scale(1.1)',
	},
})

const PartnersInvestors = () => {
	const partners = [
		{
			name: 'Goole',
			icon: '/assets/partners/google.svg',
		},
		{
			name: 'Facebook',
			icon: '/assets/partners/facebook.png',
		},
		{
			name: 'Unity',
			icon: 'assets/partners/unity.svg',
		},
		{
			name: 'Tiktok',
			icon: 'assets/partners/tiktok.png',
		},
		{
			name: 'Ironsource',
			icon: 'assets/partners/iron_source.png',
		},
		{
			name: 'AppLovin',
			icon: 'assets/partners/app_lovin.png',
		},
		{
			name: 'AppFlyer',
			icon: 'assets/partners/app_flyer.png',
		},
		{
			name: 'Sensor Tower',
			icon: 'assets/partners/sensor_tower.png',
		},
	]

	return (
		<Box
			component='footer'
			sx={{
				position: 'fixed',
				width: '100vw',
				bottom: '0',
			}}>
			<Container maxWidth='lg'>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: 'repeat(4, 1fr)',
						gridTemplateRows: 'repeat(2, 1fr)',
						backgroundColor: 'rgba(0, 0, 0, .3)',
						padding: '16px',
					}}>
					{partners.map((partner) => (
						<div
							key={partner.name}
							style={{ maxWidth: '100px', maxHeight: '100px' }}>
							<img
								src={partner.icon}
								alt={partner.name}
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'contain',
								}}
							/>
						</div>
					))}
				</Box>
			</Container>
		</Box>
	)
}

export default PartnersInvestors
