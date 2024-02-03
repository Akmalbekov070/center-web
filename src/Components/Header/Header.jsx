// Images
import Logo from '../../Assets/Images/Logo-2.png';
import { PiPhoneCall, PiListLight } from 'react-icons/pi';
import { Menu, MenuHandler, MenuList, MenuItem, Button } from '@material-tailwind/react';

export const Header = () => {
	return (
		//boshlanish qismi
		<div className='w-full h-32 backdrop-blur-lg px-2 fixed top-0 flex justify-between items-center z-50 md:px-20 '>
			{/* header chap qismi */}
			<div className='w-full flex items-center gap-2'>
				<img src={Logo} alt='' className='object-cover w-[250px]  h-28' />
				<div className=' bg-transparent outline-none cursor-pointer max-md:hidden text-white text-[20px] hover:text-blue-400  transform transition-all duration-500 ease-in-out'>
					Kurslar
				</div>
			</div>
			{/* header o'ng qismi */}
			<div className='w-full flex justify-end items-center text-[10px] gap-6 max-sm:gap-1'>
				<div className='text-white  max-lg:hidden  text-[20px]  transform transition-all duration-500 ease-in-out hover:text-blue-400'>
					{/* [#FF0F87] */}
					{/* link========== */}
					<a href='/'>Ro‘yxatdan o‘tish</a>
				</div>
				<div className='relative'>
					<button
						className='max-lg:hidden    border border-0.3 hover:border-blue-400 flex items-center gap-1 border-blue-400 text-white rounded-md   hover:text-blue-400 transform transition-all duration-500 ease-in-out shadow-md shadow-white hover:shadow-lg hover:shadow-white  py-2 px-4 text-[20px]      before:absolute 
                      before:inset-0 
                      before:origin-bottom 
                      before:scale-y-[0.1] 
											before:text-white
                      before:transition
                      before:duration-300
                      hover:before:scale-y-100'
					>
						<PiPhoneCall size='23' />
						+998913138989
					</button>
				</div>
				<div className='text-white max-lg:flex hidden'>
					<Menu>
						<MenuHandler>
							<Button className='bg-transparent'>
								{' '}
								<PiListLight size='32' />
							</Button>
						</MenuHandler>
						<MenuList className='z-50 bg-transparent backdrop-blur-lg  text-white '>
							<MenuItem className='hover:bg-gray-400 py-3'>Ro‘yxatdan o‘tish</MenuItem>
							<MenuItem className='flex items-center hover:bg-gray-400 py-3'>
								<PiPhoneCall size='18' />
								+998913138989
							</MenuItem>
							<MenuItem className='hover:bg-gray-400'>Kurslar</MenuItem>
						</MenuList>
					</Menu>
				</div>
				<div>
					<select className='bg-transparent outline-none text-white  text-[20px]'>
						<option className='text-black ' value='Uzb'>
							Uzb
						</option>{' '}
						<option className='text-black ' value='Ru'>
							Ru
						</option>
					</select>
				</div>
			</div>
		</div>
	);
};
// https://github.com/Akmalbekov070/Joylinks.git
