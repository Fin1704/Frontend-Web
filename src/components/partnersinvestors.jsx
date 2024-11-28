import React from 'react'
import styled from 'styled-components'

const partners = [
	{
		name: 'Goole',
		icon: '/assets/partners/google.svg',
	},
	{
		name: 'Facebook',
		icon: '/assets/partners/facebook.png',
	},
	{
		name: 'Unity',
		icon: 'assets/partners/unity.svg',
	},
	{
		name: 'Tiktok',
		icon: 'assets/partners/tiktok.png',
	},
	{
		name: 'Ironsource',
		icon: 'assets/partners/iron_source.png',
	},
	{
		name: 'AppLovin',
		icon: 'assets/partners/app_lovin.png',
	},
	{
		name: 'AppFlyer',
		icon: 'assets/partners/app_flyer.png',
	},
	{
		name: 'Sensor Tower',
		icon: 'assets/partners/sensor_tower.png',
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
		<div className='p-10'>
			<div className='relative py-10 text-4xl font-bold text-center text-white'>
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
