import React from 'react';
import bg from '../../Assets/Images/home-background.jpg';
import logo from '../../Assets/Images/Rectangle-left.png';
import AboutCard from './AboutCard';
//
//
export const AboutPage = () => {
	return (
		<div className='w-full relative'>
			<div>
				<img className='w-full h-[100vh]' src={bg} alt='backgraund' />
				<div className='w-full h-[100vh] bg-black/95 absolute bottom-0 left-0'></div>
			</div>
			{/* logo */}
			<img
				className='w-full h-[100vh] absolute bottom-0 right-[26%] max-sm:right-[41.5%] overflow-y-hidden '
				src={logo}
				alt='Logo page'
			/>
			<div className='absolute top-0 left-[-28px] text-white'>
				<AboutCard />
			</div>
		</div>
	);
};
