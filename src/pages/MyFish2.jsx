import { Android } from '@mui/icons-material'
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


const SteamButton = styled(Button)(({ theme }) => ({


	'&:hover': {

	},
}))

const MyFish2 = () => {
	const navigate = useNavigate()

	const [activeStep, setActiveStep] = useState(0)
	const [autoJumpImage, setautoJumpImage] = useState(false)
	const [snackbar, setSnackbar] = useState({
		open: false,
		message: '',
		severity: 'info',
	})

	const gameData = {
		title: 'My Fish 2',
		description: `
   My Fish 2 is an online simulation and action game where players from around the world can care for and compete with unique battle fish. Build your personalized aquarium, nurture, and train your fish to develop powerful abilities and stats.

In addition to decorating your tank to showcase your style, you can enter online arenas to challenge friends or random opponents in exciting matches. Battles are fast-paced and require strategic use of each fish’s unique skills and strengths. The game features global leaderboards, PvP events, and daily quests, offering endless fun and challenges.

Dive into My Fish 2 to create the ultimate battle aquarium and claim the top spot in the aquatic world!
    `,
		screenshots: [
			'/assets/myfish/myfish.mp4',
			'/assets/myfish/2.webp',
			'/assets/myfish/1.webp',
			'/assets/myfish/3.webp',
		],

		tags: ['STRATEGY', 'SIMULATION','ONLINE'],
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
		<div className='h-100 flex gap-5 p-10 overflow-hidden'>
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
													? '/assets/logo_myfish.png'
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
						<Box
							sx={{
								p: 2,

								color: 'white',
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
								/><Chip
								icon={<Android color='white' />}
								label='Android'
								sx={{ bgcolor: '#3f5177', color: '#fff' }}
							/>
								<Box sx={{ mb: 3 }}>
									<Chip
										label='ONLINE'
										sx={{
											mr: 1,
											background: '#2b78d4',
											color: 'white',
										}}
									/>
									<Chip
										label='STRATEGY'
										sx={{
											background: '#2b78d4',
											color: 'white',
										}}
									/>
									<Chip
										label='SIMULATION'
										sx={{
											background: '#2b78d4',
											color: 'white',
										}}
									/>
								</Box>
							</Box>
						</Box>
					</Grid>
				</Grid>

				<Grid container spacing={4} sx={{ mt: 2 }}>
					<Grid item xs={12} md={8}>
						<Box sx={{
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							transition: 'transform 0.2s',
							'&:hover': {
								transform: 'scale(1.02)',
							},
						}}>
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
									sx={{ whiteSpace: 'pre-line', color: 'white', }}>
									{gameData.description}
								</Typography>
							</CardContent>
						</Box>
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
			
		</div>
	)
}

export default MyFish2
