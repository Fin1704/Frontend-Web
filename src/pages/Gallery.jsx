import {
	Box,
	Card,
	CardMedia,
	Chip,
	Container,
	IconButton,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material'
import { styled } from '@mui/system'
import React, { useCallback, useEffect, useState } from 'react'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const StyledCard = styled(Card)(({ theme }) => ({
	display: 'flex',
	position: 'relative',
	transition: 'transform 0.3s ease-in-out',
	'&:hover': {
		transform: 'scale(1.02)',
		cursor: 'pointer',
		'& .hover-content': {
			opacity: 1,
		},
	},
	marginBottom: theme.spacing(2),
	height: '200px',
	backgroundColor: 'transparent',
}))

const GameLogo = styled(Box)(({ theme }) => ({
	width: '50px',
	height: '50px',
	borderRadius: '10px',
	overflow: 'hidden',
}))

const GameDescription = styled(Box)(({ theme }) => ({
	padding: theme.spacing(2),
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	flex: 1,
	color: '#ffffff',
}))

const SliderControls = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginBottom: theme.spacing(2),
}))

const SquareGameCard = styled(Card)(({ theme }) => ({
	position: 'relative',
	transition: 'transform 0.3s ease-in-out',
	'&:hover': {
		transform: 'scale(1.05)',
		cursor: 'pointer',
	},
	aspectRatio: '1',
	backgroundColor: 'transparent',
}))

const GameGallery = () => {
	const navigate = useNavigate()

	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
	const [games, setGames] = useState([])
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		const gameData = [
			{
				id: 1,
				name: 'Alphalt Thunder',
				genre: 'Racing',
				description:
					'Compete with rivals, challenge your friends, and place on-chain bets to elevate the fun.',
				background: '/assets/1.jpg',
				logo: '/assets/logogame.png',
				to: '../alphalt-thunder',
			},
			{
				id: 2,
				name: 'Alphalt Thunder Clone',
				genre: 'Racing',
				description:
					'Compete with rivals, challenge your friends, and place on-chain bets to elevate the fun.',
				background: '/assets/2.jpg',
				logo: '/assets/logogame.png',
				to: '../alphalt-thunder',
			},
		]
		setGames(gameData)
	}, [])

	const handleNext = useCallback(() => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length)
	}, [games.length])

	const handlePrev = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + games.length) % games.length
		)
	}

	useEffect(() => {
		const timer = setInterval(() => {
			handleNext()
		}, 5000)

		return () => clearInterval(timer)
	}, [games.length, handleNext])

	return (
		<Box
			sx={{
				backgroundColor: '#060824',
				width: '100%',
				height: '90vh',
				overflowY: 'auto',
				scrollbarWidth: 'none',
				'&::-webkit-scrollbar': {
					display: 'none',
				},
				py: 4,
			}}>
			<Container maxWidth='lg'>
				<SliderControls className='animate__animated animate__bounceIn'>
					<IconButton onClick={handlePrev} sx={{ color: '#ffffff' }}>
						<MdArrowBack size={24} />
					</IconButton>
					<Typography variant='body2' sx={{ color: '#ffffff' }}>
						{currentIndex + 1} / {games.length}
					</Typography>
					<IconButton onClick={handleNext} sx={{ color: '#ffffff' }}>
						<MdArrowForward size={24} />
					</IconButton>
				</SliderControls>
				{games.length > 0 && (
					<StyledCard>
						<CardMedia
							component='img'
							sx={{
								width: '40%',
								height: '100%',
								objectFit: 'cover',
							}}
							image={`${games[currentIndex].background}`}
							alt={`${games[currentIndex].name} background`}
							loading='lazy'
						/>
						<GameDescription>
							<Stack spacing={2}>
								<Stack
									direction='row'
									spacing={2}
									alignItems='center'>
									<GameLogo>
										<img
											src={`${games[currentIndex].logo}`}
											alt={`${games[currentIndex].name} logo`}
											style={{
												width: '100%',
												height: '100%',
												objectFit: 'cover',
											}}
											loading='lazy'
										/>
									</GameLogo>
									<Box>
										<Typography
											variant='h5'
											sx={{ color: '#ffffff' }}>
											{games[currentIndex].name}
										</Typography>
										<Typography
											variant='subtitle1'
											sx={{ color: '#ffffff80' }}>
											{games[currentIndex].genre}
										</Typography>
									</Box>
								</Stack>
								<Typography
									variant='body1'
									sx={{ color: '#ffffff' }}>
									{games[currentIndex].description}
								</Typography>
							</Stack>
						</GameDescription>
					</StyledCard>
				)}
				<Stack spacing={2} sx={{ mt: 4 }}>
					{games.map((game, index) => (
						<Box
							key={game.id}
							onClick={() => navigate(game.to)}
							sx={{
								display: 'flex',
								alignItems: 'center',
								gap: 2,
								cursor: 'pointer',
							}}
							className='animate__animated animate__bounceIn'>
							<SquareGameCard
								sx={{ width: '100px', height: '100px' }}>
								<CardMedia
									component='img'
									sx={{
										width: '100%',
										height: '100%',
										objectFit: 'cover',
									}}
									image={`${game.logo}`}
									alt={`${game.name} logo`}
									loading='lazy'
								/>
							</SquareGameCard>
							<Box sx={{ flex: 1 }}>
								<Typography
									variant='body1'
									sx={{ color: '#ffffff' }}>
									{game.name}
								</Typography>
								<Typography
									variant='body2'
									sx={{ color: '#ffffff80', mt: 0.5 }}>
									{game.description}
								</Typography>
							</Box>
							<Chip
								label={game.genre}
								sx={{
									backgroundColor: 'rgba(255, 255, 255, 0.1)',
									color: '#ffffff',
									borderRadius: '16px',
								}}
							/>
						</Box>
					))}
				</Stack>
			</Container>
		</Box>
	)
}

export default GameGallery
