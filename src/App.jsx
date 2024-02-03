// Packages
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layouts
import { RootLayout } from './Layouts/RootLayout';

// Pages
import { Home } from './Pages/Home/Home';
import GoogleMap from './Components/GoogleMap/GoogleMap';

function App() {
	const routes = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			children: [
				{
					index: true,
					element: <Home />,
				},
			],
		},
	]);

	return (
		<div>
			<RouterProvider router={routes} />
		</div>
	);
}

export default App;
