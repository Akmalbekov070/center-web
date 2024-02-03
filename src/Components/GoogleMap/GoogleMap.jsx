import React from 'react';
import bg from '../../Assets/Images/home-background.jpg';
import logo from '../../Assets/Images/Rectangle-right.png';
import LeftMap from './LeftMap';
import RightMap from './RightMap';

const GoogleMap = () => {
	return (
		<div className='w-full '>
			{/* backgraound */}
			<div>
				<img className='w-full h-[100vh]' src={bg} alt='backgraund' />
				<div className='w-full h-[100vh] bg-black/95 absolute bottom-0 left-0'></div>
			</div>
			{/* logo */}
			<img
				className='w-full h-[100vh] absolute bottom-0 right-[10%] max-sm:right-[41.5%] overflow-y-hidden '
				src={logo}
				alt='Logo page'
			/>
			{/* google map two page */}
			<div className='w-full absolute top-8 left-0 flex max-md:flex-col'>
				<LeftMap />
				<RightMap />
			</div>
		</div>
	);
};

export default GoogleMap;

/* <iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5208.723745412644!2d66.92621136537788!3d39.666851973072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19534887b809%3A0x3e3f658155878962!2sRegiston%20O&#39;quv%20Markazi!5e0!3m2!1sru!2s!4v1705319299227!5m2!1sru!2s'
				width='600'
				height='450'
				// style={'border: 0'}
				allowfullscreen=''
				loading='lazy'
				referrerpolicy='no-referrer-when-downgrade'
			></iframe> */
