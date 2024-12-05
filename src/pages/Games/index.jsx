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
				description='As a product company, we develop our products from
						scratch to market launch. To do this, we use our modular
						system and improve it constantly. Here is the list of
						our internal casual and web3 products created by the
						Galaxy4games team.'
				btnContent='Get Started'
				onClick={handleScrollToGames}
			/>

			<div ref={games} className='container space-y-10 md:px-0'>
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
