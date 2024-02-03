import img from '../../Assets/Images/3d.png';
import GoogleMap from '../../Components/GoogleMap/GoogleMap';
import AboutCard from '../../Components/AboutCard/AboutCard';
import { AboutPage } from '../../Components/AboutCard/AboutPage';
export const Home = () => {
	return (
		///justify o'chiriladi
		<>
			<div className='w-full flex  absolute top-8 md:top-28 max-sm:top-8 left-0 px-24 max-sm:px-10  text-white'>
				<div className='w-full flex flex-col   pt-28'>
					<div className=' text-[45px] max-sm:text-[30px] sm:text-[45px]  py-2'>Avtomagnitola CarFly M320</div>
					<p className='w-[50%] max-md:w-[100%] text-[18px] leading-6 '>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores modi enim earum in, veniam saepe. Accusamus ipsum
						corporis omnis molestias? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, repudiandae.
					</p>
					<div className='py-4 relative  z-10'>
						{/* <button class='bg-blue-400 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:text-white shadow-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce'>
							Learn More
						</button> */}
						<button className='w-[180px] py-4 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]  border border-1  text-[20px] rounded-3xl transition-all duration-700 ease-in-out  hover:shadow-lg hover:shadow-white  '>
							{' '}
							Learn more
						</button>
					</div>
				</div>
				<div className='w-[0%] '>
					<img className='w-[500px' src={img} alt='' />
				</div>
			</div>
			{/* googlMap =====  page*/}
			<div className='relative'>
				<AboutPage />
			</div>
			<div className='relative'>
				<GoogleMap />
			</div>
		</>
	);
};
