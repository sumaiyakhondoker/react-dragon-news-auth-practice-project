import { useContext } from 'react';
import userDefaultPic from '../../../assets/user.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then(()=>{
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You have signed out successfully!!",
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch(error =>{
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
 console.log(error);
    })
  }
    const navlinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About Us</NavLink></li>
    <li><NavLink to='/contact'>Contact</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>
      
      
    
    </>

    
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navlinks}
      </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={userDefaultPic} />
        </div>
      </div>
      
    {
      user ? <button onClick={handleLogOut} className="btn btn-neutral ml-3 px-8 text-lg">Sign Out</button> : <Link to='/login'><button className="btn btn-neutral ml-3 px-8 text-lg">Login</button></Link>
    }
  </div>
</div>
    );
};

export default Navbar;