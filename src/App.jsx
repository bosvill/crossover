import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import Contact from './components/Contact'
import Story from './components/Story'
import LetsGo from './components/LetsGo'

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='contact' element={<Contact />} />
				<Route path='story' element={<Story />} />
			</Route>
		)
	)

	return (
		<div>
    <RouterProvider router={router}/>
	<LetsGo/>
	</div>
	
)
}

export default App
