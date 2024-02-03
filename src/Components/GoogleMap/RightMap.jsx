import React from 'react';

const RightMap = () => {
	return (
		<div className='w-full absolute top-0 flex left-[-45px] pl-20 text-white '>
			<div className='w-[100%] pt-14  '>
				{' '}
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5208.723745412644!2d66.92621136537788!3d39.666851973072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19534887b809%3A0x3e3f658155878962!2sRegiston%20O&#39;quv%20Markazi!5e0!3m2!1sru!2s!4v1705319299227!5m2!1sru!2s'
					width='600'
					height='450'
					// style={'border: 0'}
					allowfullscreen=''
					loading='lazy'
					referrerpolicy='no-referrer-when-downgrade'
					className='w-[60%]  h-[520px] max-md:w-full max-md:h-[350px] rounded-xl'
				></iframe>{' '}
			</div>
		</div>
	);
};

export default RightMap;
