import '../App.css';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Root = () => {
  return (
    <div className='w-full h-full relative px-4'>
      <div className="background-wrapper"></div>
      <div className="content">
        <Header />
        <div className='mt-4'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
