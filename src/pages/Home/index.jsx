import 'animate.css'

import { Box, keyframes } from '@mui/material'
import { Link } from 'react-router-dom'

import PartnersInvestors from './PartnersInvestors'

const rotate3dAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

function Home() {
	return (
		<>
			<div className='relative h-[calc(100vh-64px)] overflow-hidden'>
				<div
					className='absolute bottom-0 right-0'
					style={{
						transform:
							'perspective(750px) rotate3d(180,-45,0,-130deg)',
					}}>
					<Box
						component='img'
						src='/assets/vortex4.png'
						alt='Rotating Galaxy'
						sx={{
							animation: `${rotate3dAnimation} 20s linear infinite`,
						}}
					/>
				</div>

				<div className='absolute bottom-0 left-0 max-w-3xl p-10 space-y-3 text-white pb-20'>
					<div className='font-bold text-white text-7xl animate__bounceIn animate__fadeInLeft text-xl'>
						At S.GAMES Studio
					</div>

					<div className='animate__bounceIn animate__fadeInLeft text-sm'>
						We revolutionize the gaming experience by bridging
						traditional gaming with the limitless possibilities of
						blockchain technology. Our mission is to empower gamers
						to actively participate in open-market trades for
						in-game items across their favorite titles. Leveraging
						the cutting-edge Unity game engine and advanced
						blockchain solutions, we create seamless integrations
						that enhance gameplay without disrupting the immersive
						experience.
					</div>

					<div className='animate__bounceIn animate__fadeInLeft text-sm'>
						With over 8 years of expertise in developing Unity-based
						games for PC and mobile, our studio ensures that players
						can explore features like NFTs and decentralized
						economies effortlessly—often without even realizing the
						complex technology at play. Join us as we redefine the
						boundaries of gaming innovation!
					</div>

					<Link
						to='/games'
						className='inline-block px-5 py-3 transition rounded-full hover:opacity-80 primary-bg animate__bounceIn animate__fadeInLeft'>
						Explore Games
					</Link>
				</div>
			</div>

			<PartnersInvestors />
		</>
	)
}

export default Home
