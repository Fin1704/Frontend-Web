import { useParams } from 'react-router-dom'

const GameDetail = () => {
	const params = useParams()

	return (
		<>
			<div className='h-[calc(100vh-64px)] flex gap-5 p-10 overflow-hidden'>
				<div className='flex-1 space-y-10'>
					<div className='flex items-center gap-10'>
						<div
							className='w-32 h-32 bg-center bg-no-repeat bg-cover shrink-0 rounded-2xl'
							style={{
								backgroundImage:
									'url("https://galaxy4games.com/wp-content/uploads/2022/08/image_2022-08-24_00-50-47.png")',
							}}></div>

						<div className='space-y-10'>
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
		</>
	)
}

export default GameDetail
