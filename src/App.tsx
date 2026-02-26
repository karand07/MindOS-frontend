import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './layout/Layout'
import Dashboard from './pages/Dashboard'
import SignupPage from './pages/auth/SignupPage'
import SigninPage from './pages/auth/SigninPage'
import DocPage from './pages/DocPage'
import PhotosPage from './pages/PhotosPage'
import TweeterPage from './pages/TweeterPage'
import YoutubePage from './pages/YoutubePage'
function App() {
  return (
    <>
    <Routes>
      <Route path='/signup' element={<SignupPage/>} />
      <Route path='/signin' element={<SigninPage/>} />
      <Route path='/' element={<RootLayout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='/document' element={<DocPage/>} />
      <Route path='/photos' element={<PhotosPage/>} />
      <Route path='/tweeter' element={<TweeterPage/>} />
      <Route path='/youtube' element={<YoutubePage/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
