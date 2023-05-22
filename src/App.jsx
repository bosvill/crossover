import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import Contact from './components/Contact'
import Story from './components/Story'

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
    <RouterProvider router={router}/>
  )
}

export default App
