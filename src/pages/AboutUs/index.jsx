import React from 'react'
import Intro from '../../components/Intro'

const about = [
	{
		prefix: '15+',
		content: 'Years in game development',
	},
	{
		prefix: '40+',
		content: 'Experts and professionals',
	},
	{
		prefix: '25+',
		content: 'Mobile and social games developed',
	},
	{
		prefix: '4+',
		content: 'Web3 projects delivered',
	},
]

const technologies = [
	{
		url: '/assets/about_us/technologies/1.png',
		title: 'Development',
		content: 'Unity 3D, C#, .Net, Python',
	},
	{
		url: '/assets/about_us/technologies/2.png',
		title: '2D Design',
		content: 'APhotoshop, AIllustrator, Spine2D',
	},
	{
		url: '/assets/about_us/technologies/3.png',
		title: '3D Design',
		content: 'Maya, Houdini',
	},
	{
		url: '/assets/about_us/technologies/4.png',
		title: 'Web3',
		content: 'Etherium, Polygon, Opensea, Metamask, etc.',
	},
]

const whyUs = [
	'Comprehensive Expertise: A complete team of experts, from traditional game development to advanced blockchain integration.',
	'Proven Track Record: Successful projects like the widely acclaimed "Doraemon Racing Game" and participation in international hackathons such as Base, Shido, and Taraxa, where we\'ve earned prestigious awards.',
'Multichain Capability: Skilled in deploying games on prominent platforms, including Base, Aptos, Taraxa, opBNB, Sui, Dymension, and Tanssi.',
'Diverse Game Portfolio: Specialized in casual, strategic, racing, and PVP multiplayer games with on-chain interaction and NFT integration.'
]

const AboutUs = () => {
	return (
		<div className='pb-10 space-y-10'>
			<Intro
				title='About us'
				description="S.GAMES Studio is a powerhouse of creativity and expertise, established in 2020 by a team of highly skilled developers during the gaming industry's surge. From our beginnings as a trusted outsourcing partner for leading Japanese gaming companies, we’ve evolved into a pioneering force in blockchain and Web3 game development, equipped with all the necessary skills and talent to deliver outstanding gaming experiences."
				btnContent='Contact Us'
			/>

			{/* <div className='grid max-w-5xl grid-cols-4 gap-10 mx-auto'>
				{about.map((item) => (
					<div
						key={item.prefix}
						className='flex items-center gap-3 card'>
						<div className='text-transparent heading bg-clip-text primary-bg'>
							{item.prefix}
						</div>
						<div>{item.content}</div>
					</div>
				))}
			</div> */}

			<div className='px-10 py-5 bg-dark'>
				<div className='flex'>
					<div className='flex-1 space-y-5'>
						<div className='heading'>S.GAMES Studio</div>

						<div className='primary-bar'></div>

						<div>
							Our team boasts seasoned developers, creative artists, game designers, and blockchain specialists, all working in harmony to build games that captivate players while leveraging the immense potential of Web3 technologies. With a proven track record of success across platforms like mobile, PC, and Roblox, we have the experience and the vision to create high-quality games tailored for the future of decentralized gaming.
						</div>

						<div className='heading'>The Future of Gaming:</div>
						<div className='primary-bar'></div>
						<div>
							<div>With the explosion of GameFi and Web3, S.GAMES Studio is poised to deliver groundbreaking gaming experiences that combine innovation with mass-market appeal. We are targeting the rapidly growing gaming market with a focus on creating transparent, sustainable, and engaging ecosystems where players can truly own and trade in-game assets.</div>
							<div>We are not just building games; we are building the future of gaming—one that is decentralized, player-focused, and endlessly thrilling. Join us on this journey as we redefine the gaming industry!</div>
						</div>

						
					</div>

					<div
						className='flex-1 bg-center bg-no-repeat bg-contain'
						style={{
							backgroundImage:
								'url("/assets/about_us/coding.png")',
						}}></div>
				</div>
			</div>

			<div className='flex items-center justify-center'>
				<div className='flex flex-col items-center justify-center max-w-5xl gap-10'>
					<div className='heading'>Technologies</div>
					<div className='primary-bar'></div>
					<div className='grid grid-cols-4 gap-5'>
						{technologies.map((tech) => (
							<div key={tech.url} className='space-y-3 card'>
								{/* <img src={tech.url} alt={tech.title} /> */}
								<div className='text-xl font-bold'>
									{tech.title}
								</div>
								<div>{tech.content}</div>
							</div>
						))}
					</div>

					<div className='flex items-center justify-center w-full gap-5'>
						<div className='w-1/5 h-[2px] bg-gray-500 rounded-full'></div>
						<button className='btn btn-primary min-w-40'>
							More
						</button>
						<div className='w-1/5 h-[2px] bg-gray-500 rounded-full'></div>
					</div>
				</div>
			</div>

			<div className='flex items-center justify-center bg-dark'>
				<div className='max-w-3xl py-10 space-y-10'>
					<div className='text-center heading'>Why us</div>
					<div className='mx-auto primary-bar'></div>

					{whyUs.map((r, i) => (
						<div key={i} className='flex items-center gap-5 card'>
							<div className='text-transparent headline bg-clip-text primary-bg'>
								0{i + 1}
							</div>

							<div className='w-1 h-20 rounded-full shrink-0 primary-bg'></div>

							<div>{r}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default AboutUs
