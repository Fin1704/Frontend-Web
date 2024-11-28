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
					logoURL='https://galaxy4games.com/wp-content/uploads/2022/08/image_2022-08-24_00-50-47.png'
					name='Skiesverse'
					category='MINE, CRAFT, LAUNCH BUSINESS, AND FIGHT FOR THE DESERT'
					description='The story begins in the distant future on Earth. The planet has survived a catastrophe. The well-known world has been destroyed, and remnants of civilization are hiding in technological shelters to save human experience and heritage for the future generations. This is the new world that shelter citizens have been trying to create. Hundreds of years ago they left their underground homes.'
					thumbnailURL='https://galaxy4games.com/wp-content/uploads/2023/02/battle_back_small.png'
					slug='123'
				/>
				<GalleryCard
					logoURL='https://galaxy4games.com/wp-content/uploads/2022/08/image_2022-08-24_00-50-47.png'
					name='Skiesverse'
					category='MINE, CRAFT, LAUNCH BUSINESS, AND FIGHT FOR THE DESERT'
					description='The story begins in the distant future on Earth. The planet has survived a catastrophe. The well-known world has been destroyed, and remnants of civilization are hiding in technological shelters to save human experience and heritage for the future generations. This is the new world that shelter citizens have been trying to create. Hundreds of years ago they left their underground homes.'
					thumbnailURL='https://galaxy4games.com/wp-content/uploads/2023/02/battle_back_small.png'
				/>
				<GalleryCard
					logoURL='https://galaxy4games.com/wp-content/uploads/2022/08/image_2022-08-24_00-50-47.png'
					name='Skiesverse'
					category='MINE, CRAFT, LAUNCH BUSINESS, AND FIGHT FOR THE DESERT'
					description='The story begins in the distant future on Earth. The planet has survived a catastrophe. The well-known world has been destroyed, and remnants of civilization are hiding in technological shelters to save human experience and heritage for the future generations. This is the new world that shelter citizens have been trying to create. Hundreds of years ago they left their underground homes.'
					thumbnailURL='https://galaxy4games.com/wp-content/uploads/2023/02/battle_back_small.png'
				/>
			</div>
		</div>
	)
}

export default Games
