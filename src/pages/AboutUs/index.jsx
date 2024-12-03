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
	'Galaxy4Games has its own modules system which means we will save your time and budget by using ready made flexible solutions instead of coding everything from scratch and stretching the terms and budget.',
	'Our main rules are: fast development to test CPIs on every stage, analytics-driven decisions, optimization on every stage, and deep love for our projects',
	'We walked full way from the idea to Liveops and marketing on our own and clients projects',
	'We are not just outsource company. We are solutions provider offering with the solutions that will help to get the most out of your project monetization or business expansion into gaming and new technologies.',
	'Free quote within few days for your idea. We will provide you rough estimation for free within few days accompanied with all the necessary steps of protection like signing NDA.',
	'Transparent flow of work. We will work closely and have the sprint reviews for frequent evaluation and feedback to make sure we are on the same page with you on every step.',
	'Unlike many developers who are just entering the web3 market and have vague understanding of technology, we already have the experience of full cycle development, monetization and balance of the big web3 rpg project Skiesverse and are eager to take you to the world of web3 with us.',
]

const AboutUs = () => {
	return (
		<div className='pb-10 space-y-10'>
			<Intro
				title='About us'
				description='We are Galaxy4Games - a team of high-skilled game
						industry veterans and innovators. We have a great
						experience in creating various games – Mobile games and
						GameFi, Web3 Metaverses, casual and mid-core, ecosystems
						around blockchain and NFT, smart contracts and more.
						This experience allows us to go further in this journey
						and create Metaverse, build successful and competitive
						products. We suggest the best game solutions, mechanics,
						and ideas.'
				btnContent='Contact Us'
			/>

			<div className='grid max-w-5xl grid-cols-4 gap-10 mx-auto'>
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
			</div>

			<div className='px-10 py-5 bg-dark'>
				<div className='flex'>
					<div className='flex-1 space-y-5'>
						<div className='heading'>Our company</div>

						<div className='primary-bar'></div>

						<div>
							Galaxy4Games is a game solution provider. Our main
							goal is to make play2fun games that make people
							happy and follow new technologies like Metaverse,
							Blockchain, Web3.
						</div>

						<div>Our main rules:</div>

						<div>
							<div>- Fast development to test CPI</div>
							<div>- Each stage optimization approach</div>
							<div>- Deep love for all our projects</div>
						</div>

						<div>
							Our team provides a complete development circle and
							separate outsourcing tasks:
						</div>

						<div>
							<div>- Art development</div>
							<div>- Marketing assets</div>
							<div>- Video assets</div>
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
								<img src={tech.url} alt={tech.title} />
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
