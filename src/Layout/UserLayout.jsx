import {  Outlet } from 'react-router-dom'
import Navbar from '../Common/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Menu from '../components/Menu'
import Reserve from '../components/Reserve'
import Gallery from '../components/Gallery'
import Footer from '../Common/Footer'


const UserLayout = () => {
  return (
    <div>
    <Navbar />
        <main>
         <Outlet />
         <Home />
         <About />
         <Menu />
         <Gallery />
         <Reserve />
        </main>
    <Footer />
    </div>
  )
}

export default UserLayout
