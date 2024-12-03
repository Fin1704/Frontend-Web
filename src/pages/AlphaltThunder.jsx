import {
	Alert,
	Box,
	Button,
	Card,
	CardContent,
	Chip,
	Container,
	Divider,
	Grid,
	IconButton,
	Paper,
	Snackbar,
	styled,
	Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import {
	FaChevronLeft,
	FaChevronRight,
	FaFirefoxBrowser,
	FaHeart,
	FaPlay,
	FaShare,
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Footer from '../layouts/components/Footer'

const StyledCard = styled(Card)(({ theme }) => ({
	backgroundColor: '#060824',
	color: '#e0e0e0',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	transition: 'transform 0.2s',
	'&:hover': {
		transform: 'scale(1.02)',
	},
}))

const SteamButton = styled(Button)(({ theme }) => ({
	backgroundColor: '#3f51b5',
	color: '#fff',
	'&:hover': {
		backgroundColor: '#283593',
	},
}))

const AphaltThunder = () => {
	const navigate = useNavigate()

	const [activeStep, setActiveStep] = useState(0)
	const [autoJumpImage, setautoJumpImage] = useState(false)
	const [snackbar, setSnackbar] = useState({
		open: false,
		message: '',
		severity: 'info',
	})

	const gameData = {
		title: 'Alphalt Thunder',
		description: `
    Welcome to Alphalt Thunder, the ultimate car racing experience that combines cutting-edge realism with the power of blockchain technology! Dive into the most thrilling car driving simulator where every race is packed with high-octane action and competitive excitement. Compete with rivals, challenge your friends, and place on-chain bets to elevate the fun.

In Alphalt Thunder, every car is a unique NFT, offering you the ability to unlock powerful vehicles and explore stunning new maps using in-game tokens or the native blockchain token. It’s not just a game; it’s an innovation in gaming!

Choose from two exciting race modes:

- Singleplayer Mode: Practice solo to refine your skills, master the tracks, and become familiar with your cars.
- Multiplayer Mode: Go head-to-head with friends or strangers, betting native blockchain tokens for a chance to win big. The winner takes the pot, making every race a battle worth fighting for!

Rev your engines and get ready to dominate the tracks in Alphalt Thunder—where speed meets innovation!
    `,
		screenshots: [
			'/assets/Video.mp4',
			'/assets/1.jpg',
			'/assets/2.jpg',
			'/assets/3.jpg',
			'/assets/4.jpg',
			'/assets/5.jpg',
		],

		tags: ['Multiplayer', 'Race'],
	}
	const handleShare = () => {
		setSnackbar({
			open: true,
			message: 'Game link copied to clipboard',
			severity: 'info',
		})
	}
	const handleNext = () => {
		setActiveStep((prevStep) =>
			prevStep === gameData.screenshots.length - 1 ? 0 : prevStep + 1
		)
	}

	const handleBack = () => {
		setActiveStep((prevStep) =>
			prevStep === 0 ? gameData.screenshots.length - 1 : prevStep - 1
		)
	}

	useEffect(() => {
		if (autoJumpImage) {
			const intervalId = setInterval(() => {
				handleNext()
			}, 3000)
			return () => clearInterval(intervalId)
		}
	}, [])

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
			}}>
			<Container maxWidth='lg'>
				<Grid container spacing={4}>
					{/* <Grid item xs={12} md={8}>
                        <Box sx={{ position: "relative", }}>
                            <Box
                                sx={{
                                    height: 400,
                                    display: "flex",
                                    overflow: "hidden",
                                    width: "100%",
                                    position: "relative",
                                    borderRadius: 2
                                }}
                            >
                                <img
                                    src={`${gameData.screenshots[activeStep]}`}
                                    alt={`Screenshot ${activeStep + 1}`}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        transition: "opacity 0.5s"
                                    }}
                                    loading="lazy"
                                />
                                <IconButton
                                    onClick={handleBack}
                                    sx={{
                                        position: "absolute",
                                        left: 8,
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        bgcolor: "rgba(0,0,0,0.5)",
                                        color: "white",
                                        "&:hover": { bgcolor: "rgba(0,0,0,0.7)" }
                                    }}
                                >
                                    <FaChevronLeft />
                                </IconButton>
                                <IconButton
                                    onClick={handleNext}
                                    sx={{
                                        position: "absolute",
                                        right: 8,
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        bgcolor: "rgba(0,0,0,0.5)",
                                        color: "white",
                                        "&:hover": { bgcolor: "rgba(0,0,0,0.7)" }
                                    }}
                                >
                                    <FaChevronRight />
                                </IconButton>
                            </Box>

                            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                                {gameData.screenshots.map((screenshot, index) => (
                                    <Box
                                        key={index}
                                        component="img"
                                        src={`${screenshot}`}
                                        sx={{
                                            width: 80,
                                            height: 45,
                                            objectFit: "cover",
                                            cursor: "pointer",
                                            opacity: activeStep === index ? 1 : 0.6,
                                            transition: "opacity 0.3s",
                                            "&:hover": { opacity: 1 }
                                        }}
                                        onClick={() => setActiveStep(index)}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Grid> */}
					<Grid item xs={12} md={8}>
						<Box sx={{ position: 'relative' }}>
							<Box
								sx={{
									height: 400,
									display: 'flex',
									overflow: 'hidden',
									width: '100%',
									position: 'relative',
									borderRadius: 2,
								}}>
								{gameData.screenshots[activeStep].endsWith(
									'.mp4'
								) ? (
									<video
										src={gameData.screenshots[activeStep]}
										style={{
											width: '100%',
											height: '100%',
											objectFit: 'cover',
											borderRadius: 8,
										}}
										controls
										autoPlay
										loop
									/>
								) : (
									<img
										src={gameData.screenshots[activeStep]}
										alt={`Screenshot ${activeStep + 1}`}
										style={{
											width: '100%',
											height: '100%',
											objectFit: 'cover',
											transition: 'opacity 0.5s',
										}}
										loading='lazy'
									/>
								)}
								<IconButton
									onClick={handleBack}
									sx={{
										position: 'absolute',
										left: 8,
										top: '50%',
										transform: 'translateY(-50%)',
										bgcolor: 'rgba(0,0,0,0.5)',
										color: 'white',
										'&:hover': {
											bgcolor: 'rgba(0,0,0,0.7)',
										},
									}}>
									<FaChevronLeft />
								</IconButton>
								<IconButton
									onClick={handleNext}
									sx={{
										position: 'absolute',
										right: 8,
										top: '50%',
										transform: 'translateY(-50%)',
										bgcolor: 'rgba(0,0,0,0.5)',
										color: 'white',
										'&:hover': {
											bgcolor: 'rgba(0,0,0,0.7)',
										},
									}}>
									<FaChevronRight />
								</IconButton>
							</Box>

							<Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
								{gameData.screenshots.map(
									(screenshot, index) => (
										<Box
											key={index}
											component='img'
											src={
												screenshot.endsWith('.mp4')
													? '/assets/logogame.png'
													: screenshot
											}
											sx={{
												width: 80,
												height: 45,
												objectFit: 'cover',
												cursor: 'pointer',
												opacity:
													activeStep === index
														? 1
														: 0.6,
												transition: 'opacity 0.3s',
												'&:hover': { opacity: 1 },
											}}
											onClick={() => setActiveStep(index)}
										/>
									)
								)}
							</Box>
						</Box>
					</Grid>

					<Grid item xs={12} md={4}>
						<Paper
							sx={{
								p: 2,
								backgroundColor: '#0a0e35',
								color: '#e0e0e0',
							}}>
							<Typography
								variant='h4'
								sx={{ color: '#white', mb: 2 }}>
								{gameData.title}
							</Typography>
							<Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
								<SteamButton
									variant='contained'
									startIcon={<FaPlay />}
									fullWidth>
									Go to
								</SteamButton>
								<IconButton sx={{ color: '#3f51b5' }}>
									<FaHeart />
								</IconButton>
								<IconButton
									sx={{ color: '#3f51b5' }}
									onClick={handleShare}>
									<FaShare />
								</IconButton>
							</Box>
							<Divider sx={{ bgcolor: '#1a237e', my: 2 }} />
							<Box
								sx={{
									display: 'flex',
									gap: 1,
									flexWrap: 'wrap',
								}}>
								<Chip
									icon={<FaFirefoxBrowser color='white' />}
									label='WebGL'
									sx={{ bgcolor: '#3f5177', color: '#fff' }}
								/>
								<Box sx={{ mb: 3 }}>
									<Chip
										label='Multiplayer'
										sx={{
											mr: 1,
											background: '#2b78d4',
											color: 'white',
										}}
									/>
									<Chip
										label='Racing'
										sx={{
											background: '#2b78d4',
											color: 'white',
										}}
									/>
								</Box>
							</Box>
						</Paper>
					</Grid>
				</Grid>

				<Grid container spacing={4} sx={{ mt: 2 }}>
					<Grid item xs={12} md={8}>
						<StyledCard>
							<CardContent>
								<Typography
									variant='h5'
									sx={{
										color: 'yellow', // Màu chữ đen
										textShadow:
											'0px 0px 3px white, 0px 0px 5px white',
									}}>
									GAME INTRODUCE
								</Typography>

								<Typography
									variant='body1'
									sx={{ whiteSpace: 'pre-line' }}>
									{gameData.description}
								</Typography>
							</CardContent>
						</StyledCard>
					</Grid>
				</Grid>
				<Snackbar
					open={snackbar.open}
					autoHideDuration={3000}
					onClose={() => setSnackbar({ ...snackbar, open: false })}>
					<Alert
						onClose={() =>
							setSnackbar({ ...snackbar, open: false })
						}
						severity={snackbar.severity}
						sx={{ width: '100%' }}>
						{snackbar.message}
					</Alert>
				</Snackbar>
			</Container>
			<Footer></Footer>
		</Box>
	)
}

export default AphaltThunder
