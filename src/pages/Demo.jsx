import {
	Box,
	Button,
	Chip,
	Container,
	Grid,
	IconButton,
	Paper,
	Rating,
	styled,
	Tab,
	Tabs,
	Typography,
} from '@mui/material'
import React, { useState } from 'react'
import {
	FaAndroid,
	FaApple,
	FaFacebook,
	FaShare,
	FaSteam,
	FaTwitter,
	FaWindows,
} from 'react-icons/fa'
import { IoGameController } from 'react-icons/io5'

const StyledPaper = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(3),
	marginBottom: theme.spacing(2),
	transition: 'transform 0.2s',
	'&:hover': {
		transform: 'translateY(-4px)',
		boxShadow: theme.shadows[4],
	},
}))

function AlphaltThunder() {
	const [tabValue, setTabValue] = useState(0)

	const gameData = {
		title: 'Cyber Horizon 2077',
		description:
			'Embark on an epic journey in this open-world RPG where your choices shape the future of a dystopian metropolis. Featuring cutting-edge graphics and an immersive storyline that adapts to your decisions.',
		genre: 'Action RPG',
		releaseDate: '2024-03-15',
		developer: 'Future Games Studio',
		rating: 4.5,
		platforms: ['Windows', 'MacOS', 'Android'],
		mainImage: 'images.unsplash.com/photo-1542751371-adc38448a05e',
		screenshots: [
			'images.unsplash.com/photo-1552820728-8b83bb6b773f',
			'images.unsplash.com/photo-1550745165-9bc0b252726f',
			'images.unsplash.com/photo-1511512578047-dfb367046420',
		],
		systemRequirements: {
			minimum: {
				os: 'Windows 10 64-bit',
				processor: 'Intel Core i5-8400',
				memory: '8 GB RAM',
				graphics: 'NVIDIA GTX 1060 6GB',
			},
			recommended: {
				os: 'Windows 10 64-bit',
				processor: 'Intel Core i7-9700K',
				memory: '16 GB RAM',
				graphics: 'NVIDIA RTX 2070 SUPER',
			},
		},
		reviews: [
			{
				user: 'GameMaster',
				rating: 5,
				comment: "One of the best games I've played this year!",
			},
			{
				user: 'RPGLover',
				rating: 4,
				comment: 'Great story and gameplay mechanics.',
			},
		],
	}

	const handleTabChange = (event, newValue) => {
		setTabValue(newValue)
	}

	return (
		<Container maxWidth='lg' sx={{ py: 4 }}>
			<Grid container spacing={4}>
				<Grid item xs={12} md={8}>
					<Box
						component='img'
						src={`https://${gameData.mainImage}`}
						alt={gameData.title}
						sx={{
							width: '100%',
							height: 400,
							objectFit: 'cover',
							borderRadius: 2,
							mb: 3,
						}}
					/>

					<Typography variant='h3' component='h1' gutterBottom>
						{gameData.title}
					</Typography>

					<Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
						{gameData.platforms.includes('Windows') && (
							<FaWindows size={24} />
						)}
						{gameData.platforms.includes('MacOS') && (
							<FaApple size={24} />
						)}
						{gameData.platforms.includes('Android') && (
							<FaAndroid size={24} />
						)}
					</Box>

					<Box sx={{ mb: 4 }}>
						<Tabs value={tabValue} onChange={handleTabChange}>
							<Tab label='Overview' />
							<Tab label='System Requirements' />
							<Tab label='Reviews' />
						</Tabs>

						<Box sx={{ mt: 2 }}>
							{tabValue === 0 && (
								<StyledPaper>
									<Typography variant='body1' paragraph>
										{gameData.description}
									</Typography>
									<Grid container spacing={2}>
										<Grid item xs={12} sm={6}>
											<Typography
												variant='subtitle1'
												fontWeight='bold'>
												Genre:
											</Typography>
											<Chip
												label={gameData.genre}
												icon={<IoGameController />}
											/>
										</Grid>
										<Grid item xs={12} sm={6}>
											<Typography
												variant='subtitle1'
												fontWeight='bold'>
												Release Date:
											</Typography>
											<Typography>
												{gameData.releaseDate}
											</Typography>
										</Grid>
									</Grid>
								</StyledPaper>
							)}

							{tabValue === 1 && (
								<StyledPaper>
									<Typography variant='h6' gutterBottom>
										Minimum Requirements
									</Typography>
									<Grid container spacing={2}>
										{Object.entries(
											gameData.systemRequirements.minimum
										).map(([key, value]) => (
											<Grid item xs={12} sm={6} key={key}>
												<Typography
													variant='subtitle2'
													fontWeight='bold'>
													{key.toUpperCase()}:
												</Typography>
												<Typography>{value}</Typography>
											</Grid>
										))}
									</Grid>
								</StyledPaper>
							)}

							{tabValue === 2 && (
								<StyledPaper>
									{gameData.reviews.map((review, index) => (
										<Box key={index} sx={{ mb: 2 }}>
											<Typography
												variant='subtitle1'
												fontWeight='bold'>
												{review.user}
											</Typography>
											<Rating
												value={review.rating}
												readOnly
											/>
											<Typography>
												{review.comment}
											</Typography>
										</Box>
									))}
								</StyledPaper>
							)}
						</Box>
					</Box>
				</Grid>

				<Grid item xs={12} md={4}>
					<StyledPaper>
						<Typography variant='h6' gutterBottom>
							Developer
						</Typography>
						<Typography paragraph>{gameData.developer}</Typography>

						<Button
							variant='contained'
							color='primary'
							fullWidth
							size='large'
							startIcon={<FaSteam />}
							sx={{ mb: 2 }}>
							Get Now on Steam
						</Button>

						<Typography variant='subtitle2' gutterBottom>
							Share:
						</Typography>
						<Box sx={{ display: 'flex', gap: 1 }}>
							<IconButton color='primary'>
								<FaTwitter />
							</IconButton>
							<IconButton color='primary'>
								<FaFacebook />
							</IconButton>
							<IconButton color='primary'>
								<FaShare />
							</IconButton>
						</Box>
					</StyledPaper>

					<StyledPaper>
						<Typography variant='h6' gutterBottom>
							Screenshots
						</Typography>
						<Grid container spacing={1}>
							{gameData.screenshots.map((screenshot, index) => (
								<Grid item xs={12} key={index}>
									<Box
										component='img'
										src={`https://${screenshot}`}
										alt={`Screenshot ${index + 1}`}
										sx={{
											width: '100%',
											height: 150,
											objectFit: 'cover',
											borderRadius: 1,
										}}
									/>
								</Grid>
							))}
						</Grid>
					</StyledPaper>
				</Grid>
			</Grid>
		</Container>
	)
}

export default AlphaltThunder
