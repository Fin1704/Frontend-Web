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

const PartnersInvestors = () => {
	return (
		<div className='container'>
			<div className='relative py-10 text-center heading'>
				Partners and Investors
			</div>

			<div className='grid items-center justify-center grid-cols-2 gap-4 justify-items-center md:grid-cols-3 lg:grid-cols-4 animate__bounceIn animate_fadeIn'>
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
			</div>
		</div>
	)
}

export default PartnersInvestors
