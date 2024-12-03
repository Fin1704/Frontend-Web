import React from 'react'
import styled from 'styled-components'

const partners = [
	
	{
		name: 'Unity',
		icon: 'assets/partners/unity.png',
	},
	{
		name: 'thirdweb',
		icon: 'assets/partners/thirdweb.png',
	},
	{
		name: ' Itch.io',
		icon: 'assets/partners/itch.svg',
	},
	{
		name: 'vnbnode',
		icon: 'assets/partners/vnbnode.png',
	},
]

const PartnersContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	align-items: center;
	justify-items: center;
	padding: 16px;
`

const PartnersInvestors = () => {
	return (
		<div className='p-0'>
			<div className='relative py-10 text-4xl font-bold text-center '>
				Partners and Investors
			</div>

			<PartnersContainer className='animate__bounceIn animate_fadeIn'>
				{partners.map((partner) => (
					<div
						key={partner.name}
						style={{ width: '100px', height: '100px' }}>
						<img
							src={partner.icon}
							alt={partner.name}
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'contain',
							}}
						/>
					</div>
				))}
			</PartnersContainer>
		</div>
	)
}

export default PartnersInvestors
