import { useRef } from 'react'

import GalleryCard from '../../components/GalleryCard'
import Intro from '../../components/Intro'

const Games = () => {
	const games = useRef()

	const handleScrollToGames = () => games.current.scrollIntoView()

	return (
		<div className='pb-10'>
			<Intro
				title='Our Games / Projects'
				description='As a product studio, we develop our products from
						scratch to market launch. To do this, we use our modular
						system and improve it constantly. Here is the list of
						our internal casual and web3 products.'
				btnContent='Get Started'
				onClick={handleScrollToGames}
			/>

			<div
				ref={games}
				className='flex flex-col items-center justify-center gap-10'>
				<GalleryCard
					logoURL='/assets/logogame.png'
					name='Alphalt Thunder'
					category='RACE'
					description=' Welcome to Alphalt Thunder, the ultimate car racing experience that combines cutting-edge realism with the power of blockchain technology! Dive into the most thrilling car driving simulator where every race is packed with high-octane action and competitive excitement. Compete with rivals, challenge your friends, and place on-chain bets to elevate the fun.'
					thumbnailURL='/assets/1.jpg'
					slug='../alphalt-thunder'
				/>
				
			</div>
			<div
				ref={games}
				className='flex flex-col items-center justify-center gap-10'>
				<GalleryCard
					logoURL='/assets/logo_myfish.png'
					name='My Fish 2'
					category='STRATEGY, SIMULATION'
					description='My Fish 2 is an online simulation and action game where players from around the world can care for and compete with unique battle fish. Build your personalized aquarium, nurture, and train your fish to develop powerful abilities and stats.'
					thumbnailURL='/assets/myfish/2.webp'
					slug='../myfish2'
				/>
				
			</div>
		</div>
	)
}

export default Games
