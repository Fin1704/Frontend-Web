import { useRef } from 'react'
import { FaAngleDoubleDown } from 'react-icons/fa'

import GalleryCard from '../../components/GalleryCard'

const Games = () => {
	const games = useRef()

	const handleScrollToGames = () => games.current.scrollIntoView()

	return (
		<div className='p-10'>
			<div className='h-[calc(100vh-64px)] flex justify-center items-center'>
				<div className='flex flex-col items-center justify-center max-w-xl gap-10 animate__bounceIn'>
					<div className='text-3xl font-bold text-white'>
						Our Games / Projects
					</div>

					<div className='w-1/3 h-1 mx-auto rounded-full primary-bg'></div>

					<div className='font-medium text-white'>
						As a product company, we develop our products from
						scratch to market launch. To do this, we use our modular
						system and improve it constantly. Here is the list of
						our internal casual and web3 products created by the
						Galaxy4games team.
					</div>

					<button
						onClick={handleScrollToGames}
						className='btn btn-primary animate-bounce'>
						Get Started
						<FaAngleDoubleDown />
					</button>
				</div>
			</div>

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
		</div>
	)
}

export default Games
