import { useContext, useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../poviders/AuthProvider';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {userName, userPhoto , user, logOut} = useContext(AuthContext)
  const [isHover, setHover] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
      logOut()
          .then()
          .catch(error => console.log(error));
  }

  return (
    <nav className=" container mb-3 mx-auto bg-gray-200 py-4 px-10 justify-between flex  items-center">
      <div className="flex gap-4">
 <div className='h-20 w-20'>
    <img className='' src="https://cdn.vectorstock.com/i/1000x1000/33/99/kids-toys-logo-vector-21313399.webp" alt="" />
 </div>
 <div>
    <div className='text-4xl font-black'>
        KIDS
    </div>
    <div>
        <span className='font-black text-lg'><small>Super</small></span><br />
        <span className='font-black text-lg'><small>Car</small></span>
    </div>
 </div>


      </div>
      <div className='flex-col justify-center items-center'>
      <button
        className="block md:hidden text-gray-800 hover:text-gray-600 focus:outline-none"
        onClick={toggleNavbar}
      >
        <FaAlignJustify></FaAlignJustify>
      </button>
     

      <div
        className={`${
          isOpen ? "block" : 'hidden'
        } md:flex md:items-center mt-4 md:mt-0`}>
        <div className='md:p-5 flex justify-around items-center container mx-auto gradient'>
            
        <ul className='items-center   md:space-x-8 md:flex'>
            <li>
                <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
            </li>
            <li>
                <NavLink to='/alltoy' className={({ isActive }) => (isActive ? 'active' : 'default')}>All Toy</NavLink>
            </li>
            {user ?
            <li>
                <NavLink to='/addtoy' className={({ isActive }) => (isActive ? 'active' : 'default')}>Add Toy</NavLink>
            </li> : null
            }
            <li>
                <NavLink to='/blog' className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
            </li>
            {user ?
            <li>
                <NavLink to='/mytoy' className={({ isActive }) => (isActive ? 'active' : 'default')}>My Toy</NavLink>
            </li> : null
            }
            {
                user ?             <li>
                <NavLink onClick={handleLogOut} to='/' className='default' >Log Out</NavLink>
            </li> :             <li>
                <NavLink to='/login' className={({ isActive }) => (isActive ? 'active' : 'default')}>Log in</NavLink>
            </li>
            }
{
  user ?             <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='relative'> 
  <img className='h-8 w-8 rounded mt-2' src={userPhoto ? userPhoto : ''} alt="" />{isHover && (<div className='absolute'>{userName ? userName : ''}</div>)} </div>: null
}
            {/* {isHover && (<div className='absolute'>{userName ? userName : ''}</div>)} */}
            
             
           { /* <li>
                <NavLink to='/blog' className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
</li> */}
        </ul>
    </div>
        </div>
        </div>
    </nav>
  );
};

export default Navbar;
