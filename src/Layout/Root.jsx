import '../App.css'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Root = () => {
  return (
    <div className='w-full h-full relative p-4'>
      <Header />
      <div className='mt-4'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Root