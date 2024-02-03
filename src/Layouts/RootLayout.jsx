import { Outlet } from 'react-router-dom';
import { Header } from '../Components/Header/Header';
import bg from '../Assets/Images/home-background.jpg';
import { Home } from '../Pages/Home/Home';
import logo from '../../src/Assets/Images/Rectangle-right.png';
import ellips from '../Assets/Images/Ellipse.png';
import Footer from '../Components/Footer/footer';

export const RootLayout = () => {
	return (
		<div>
			{/* bosh qismi */}
			<div className='w-full  relative'>
				<img className='w-full h-[100vh] max-sm:h-[70vh]  ' src={bg} alt='logo' />
				<div className='w-full h-[100vh] absolute   bg-black/95  top-0 left-0'></div>
				<img className='absolute top-0 right-[10%]  w-full h-[100vh]' src={logo} alt='as' />
				<img src={ellips} alt='' className='absolute bottom-0  left-0 h-[420px] ' />
				<Header />
			</div>
			<Outlet />
			{/* Hali mavjud emas */}
			<div>
				<Footer />
			</div>
		</div>
	);
};
