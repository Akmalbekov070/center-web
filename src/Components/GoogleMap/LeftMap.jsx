import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

const LeftMap = () => {
	return (
		<div className='w-full text-white flex  flex-col justify-center items-end max-md:items-start max-md:pt-[340px] absolute top-0 right-[45px] pt-6 '>
			{/* backraound */}
			<div className='w-[42%] max-md:w-full h-[580px] bg-transparent rounded-lg'>
				{/* Text all */}
				<div className='w-full max-md:flex max-md:flex-wrap r gap-5 pt-24 pl-24 max-md:pl-18'>
					<div className='w-full'>
						<div className='w-full text-2xl text-gray-300'>Bizning Manzilimiz:</div>
						<div className='py-5 flex gap-2 items-center max-md:pl-0'>
							<div className='text-2xl '>📌</div>
							<div className='w-full text-xl'>Буюк Ипак Йули кучаси, Samarqand, Samarqand viloyati</div>
						</div>
					</div>
					<div className='w-full'>
						<div className='w-full h-[1px] ml-[-20px] bg-gray-500'></div>
						<div className='text-gray-300 text-2xl py-4 max-md:py-1'>Telefon raqam:</div>
						<div className='flex items-center gap-2 pl-4 py-2 max-md:pl-0'>
							<FaPhoneAlt size='23' />
							<div className='text-xl'>+998(99) 332-32-20</div>
						</div>
					</div>
					<div className=''>
						<div className='w-full h-[1px] ml-[-20px] bg-gray-500 my-4 '></div>
						<div className='text-gray-300 text-2xl py-2'>Elektron Pochta:</div>
						<div className='flex items-center gap-3 pl-4 py-4 max-md:py-1  max-md:pl-0'>
							<MdOutlineMail size='29' />
							<div className='text-lg'>joylinksitacademy@gmail.com</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeftMap;
