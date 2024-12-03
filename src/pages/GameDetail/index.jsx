import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Slider from '../../components/Slider'

const images = [
	{
		id: 1,
		url: 'https://galaxy4games.com/wp-content/uploads/2023/03/photo_2023-05-02-12.22.07.jpeg',
	},
	{
		id: 2,
		url: 'https://galaxy4games.com/wp-content/uploads/2023/03/skiesverse20.png',
	},
	{
		id: 3,
		url: 'https://galaxy4games.com/wp-content/uploads/2023/03/skiesverse19.png',
	},
	{
		id: 4,
		url: 'https://galaxy4games.com/wp-content/uploads/2023/03/skiesverse17.png',
	},
	{
		id: 5,
		url: 'https://galaxy4games.com/wp-content/uploads/2023/03/skiesverse14.png',
	},
	{
		id: 6,
		url: 'https://galaxy4games.com/wp-content/uploads/2023/03/skiesverse12.png',
	},
	{
		id: 7,
		url: 'https://galaxy4games.com/wp-content/uploads/2023/03/skiesverse4.png',
	},
	{
		id: 8,
		url: 'https://galaxy4games.com/wp-content/uploads/2023/03/skiesverse5.png',
	},
]

const results = [
	{
		prefix: '12 months',
		title: 'Development Alpha',
		content:
			'In 12 month Alpha version of Web3 RPG game is availible to play',
	},
	{
		prefix: '4 months',
		title: 'Mobile Platforms',
		content:
			'The game is availible and playable on mobile platforms due to optimization approach after 4 months from alpha launch',
	},
	{
		prefix: '10+',
		title: 'Partnerships',
		content:
			"Since Alpha we've got 10+ partnerships with top blockchain ecosystems, platforms and marketplaces",
	},
]

const GameDetail = () => {
	const { slug } = useParams()
	const [loading, setLoading] = useState(true)
	const [game, setGame] = useState(true)

	useEffect(() => {}, [slug])

	return (
		<div className='py-10 space-y-10'>
			<div className='h-[calc(100vh-64px)] flex gap-5 container overflow-hidden'>
				<div className='flex-1 space-y-10'>
					<div className='flex items-center gap-10'>
						<div
							className='w-32 h-32 bg-center bg-no-repeat bg-cover shrink-0 rounded-2xl'
							style={{
								backgroundImage:
									'url("https://galaxy4games.com/wp-content/uploads/2022/08/image_2022-08-24_00-50-47.png")',
							}}></div>

						<div className='space-y-5'>
							<div className='text-3xl font-bold '>
								Skiesverse
							</div>

							<div className='w-1/2 h-1 rounded-full primary-bg'></div>

							<div className='font-medium text-primary'>
								MINE, CRAFT, LAUNCH BUSINESS, AND FIGHT FOR THE
								DESERT
							</div>
						</div>
					</div>

					<div className=''>
						The story begins in the distant future on Earth. The
						planet has survived a catastrophe. The well-known world
						has been destroyed, and remnants of civilization are
						hiding in technological shelters to save human
						experience and heritage for the future generations. This
						is the new world that shelter citizens have been trying
						to create. Hundreds of years ago they left their
						underground homes.
					</div>

					<button className='btn btn-primary'>Play now</button>
				</div>

				<div
					className='relative flex-1 bg-center bg-no-repeat bg-contain'
					style={{
						backgroundImage:
							'url("https://galaxy4games.com/wp-content/uploads/2023/09/sc_skies-1.png")',
					}}>
					<div className='absolute -translate-x-1/2 -translate-y-1/2 bg-[rgba(0,0,0,.7)] border-2 rounded-full w-80 top-1/2 left-1/2 h-80 border-primary -z-10'>
						<div className='absolute top-1/2 left-1/2 w-[130%] h-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary bg-[rgba(0,0,0,.3)]'></div>
					</div>
				</div>
			</div>

			<div className='container mx-auto'>
				<Slider images={images} />
			</div>

			<div className='flex items-center justify-center bg-dark'>
				<div className='container py-10 space-y-10'>
					<div className='text-center heading'>About Project</div>
					<div className='mx-auto line'></div>

					<iframe
						className='w-full min-h-80'
						src='https://www.youtube.com/embed/7KwzVZNpzmU'
						title='Skiesverse_intro'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerpolicy='strict-origin-when-cross-origin'
						allowfullscreen></iframe>

					<div>
						Web3 Post-apocalyptic tactical RPG with user-driven
						economy and tokenomy. Mine, craft, launch a business,
						and fight for the desert.
					</div>
				</div>
			</div>

			<div className='container flex flex-col items-center justify-center gap-10'>
				<div className='heading'>Our results</div>

				<div className='line'></div>

				<div className='grid grid-cols-3 gap-10'>
					{results.map((result) => (
						<div key={result.prefix} className='space-y-5 card'>
							<div className='text-transparent uppercase headline bg-clip-text primary-bg'>
								{result.prefix}
							</div>

							<div className='line'></div>

							<div className='heading'>{result.title}</div>
							<div>{result.content}</div>
						</div>
					))}
				</div>

				<button className='btn btn-primary'>More</button>
			</div>
		</div>
	)
}

export default GameDetail
