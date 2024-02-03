import React from 'react';
import Logo from '../../Assets/Images/Logo-2.png';
import { TbCircleLetterC } from 'react-icons/tb';
import { IoLogoInstagram } from 'react-icons/io';
import { FaTelegramPlane, FaGoogle } from 'react-icons/fa';
import { CiFacebook } from 'react-icons/ci';
import { FiYoutube, FiTwitter } from 'react-icons/fi';
const Footer = () => {
	return (
		// 1-vaiant
		// <div className='w-full h-30  bg-slate-900  items-center'>
		// 	{/* yuqori qism */}
		// 	<div className='w-full flex flex-col  items-center'>
		// 		<img src={Logo} alt='' className='object-cover w-24  h-14' />
		// 		<div className=' flex justify-between text-[8px] gap-10 text-white '>
		// 			<a href=''>Kurslar</a>
		// 			<a href=''>Ro'yxatdan o'tish</a>
		// 			<a href=''>Akademiya</a>
		// 		</div>
		// 	</div>
		// 	<div className='w-full h-[0.3px] bg-slate-400 mt-3  '></div>
		// 	{/* pastki qism */}
		// 	<div className='w-full flex justify-between items-center px-8 text-white py-[11px]'>
		// 		<div className='w-full flex items-center'>
		// 			<TbCircleLetterC size='9' />
		// 			<div className='text-white text-[8px]'>2024 JoyLinks IT Academy. All rights reserved</div>
		// 		</div>
		// 		<div className='flex items-center gap-8 cursor-pointer'>
		// 			<a href=''>
		// 				<IoLogoInstagram size='13' />
		// 			</a>
		// 			<a href=''>
		// 				<FaTelegramPlane size='13' />
		// 			</a>
		// 			<a href=''>
		// 				<CiFacebook size='13' />
		// 			</a>
		// 			<a href=''>
		// 				<FiYoutube size='13' />
		// 			</a>
		// 		</div>
		// 	</div>
		// </div>
		<div className='w-full h-32 bg-slate-600 items-center text-white'>
			<div className='w-full flex flex-col '>
				<div className='flex items-center justify-center pt-8 gap-6'>
					<a href=''>
						<IoLogoInstagram size='25' />{' '}
					</a>{' '}
					<a href=''>
						<FaTelegramPlane size='24' />{' '}
					</a>{' '}
					<a href=''>
						<CiFacebook size='24' />{' '}
					</a>{' '}
					<a href=''>
						<FiYoutube size='24' />{' '}
					</a>
					<a href=''>
						<FiTwitter size='24' />
					</a>
					<a href=''>
						<FaGoogle size='24' />
					</a>
				</div>
				<div className='w-full h-[1px] bg-gray-500 mt-3'></div>
				<div className='w-full  flex items-center justify-center pt-4	'>
					<TbCircleLetterC size='23' />
					<div className='text-white text-[15px] '>2024 JoyLinks IT Academy. All rights reserved</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
